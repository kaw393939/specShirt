<script setup>
import { computed } from 'vue'
import documents from '../../documents.json'
import project from '../../project.json'
const props = defineProps({ id: { type: String, required: true } })
const doc = computed(() => documents.find(d => d.id === props.id))
</script>
<template>
  <aside v-if="doc" class="review-panel" aria-label="Discuss this plan">
    <strong>{{ doc.status === 'Approved' ? 'Agreed plan' : 'Let’s discuss this step' }}</strong>
    <p v-if="doc.status !== 'Approved'">This is a draft. Read it, then share your ideas or questions in GitHub.</p>
    <p v-else>We have agreed on this step. Discuss changes before building something different.</p>
    <a :href="`https://github.com/${project.repository}/issues/${doc.reviewIssue}`">{{ doc.status === 'Approved' ? 'Read our discussion' : 'Share feedback' }} →</a>
    <p v-if="doc.approvalUrl"><a :href="doc.approvalUrl">Read the approval</a></p>
  </aside>
</template>
