import React from 'react';
const LABEL_9793 = 'component_9793';
export function Component9793({ value = 9793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9793, 'data-value': derived.doubled }, children);
}
export default Component9793;
