<script setup>
import { withBase } from 'vitepress'
import documents from '../../documents.json'
import project from '../../project.json'
const repo = `https://github.com/${project.repository}`
</script>
<template>
  <div class="review-cards">
    <article v-for="doc in documents" :key="doc.id" class="review-card">
      <div class="card-meta">{{ doc.id }} <span class="status">{{ doc.status }}</span></div>
      <h3><a :href="withBase(`/${doc.path}.html`)">{{ doc.title }}</a></h3>
      <a v-if="doc.reviewIssue" :href="`${repo}/issues/${doc.reviewIssue}`">Discuss in issue #{{ doc.reviewIssue }} →</a>
      <span v-else>Review issue pending</span>
    </article>
  </div>
</template>
