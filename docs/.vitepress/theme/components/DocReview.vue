<script setup>
import { computed } from 'vue'
import documents from '../../documents.json'
import project from '../../project.json'
const props = defineProps({ id: { type: String, required: true } })
const doc = computed(() => documents.find(d => d.id === props.id))
const repo = `https://github.com/${project.repository}`
const correction = computed(() => `${repo}/issues/new?template=docs-review.yml&title=${encodeURIComponent(`[Docs] ${props.id}: `)}&document=${encodeURIComponent(doc.value.path)}&revision=${encodeURIComponent('See the page source and commit history')}`)
</script>
<template>
  <aside v-if="doc" class="review-panel" aria-label="Document review">
    <div><span class="status">{{ doc.status }}</span> <strong>{{ doc.id }}</strong> · Implementation tracked separately</div>
    <p v-if="doc.status !== 'Approved'">Working specification. Review and approval are required before implementing its proposed storefront behavior.</p>
    <p v-else>Approved revision: <code>{{ doc.approvedRevision }}</code> · <a :href="doc.approvalUrl">Approval record</a></p>
    <div class="review-links">
      <a v-if="doc.reviewIssue" :href="`${repo}/issues/${doc.reviewIssue}`">Review discussion #{{ doc.reviewIssue }}</a>
      <span v-else>Review discussion pending setup</span>
      <a :href="correction">Suggest a correction</a>
    </div>
  </aside>
</template>
