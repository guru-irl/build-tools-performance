import React from 'react';
const LABEL_30284 = 'component_30284';
export function Component30284({ value = 30284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30284, 'data-value': derived.doubled }, children);
}
export default Component30284;
