import React from 'react';
const LABEL_12112 = 'component_12112';
export function Component12112({ value = 12112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12112, 'data-value': derived.doubled }, children);
}
export default Component12112;
