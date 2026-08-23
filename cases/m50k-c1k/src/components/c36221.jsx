import React from 'react';
const LABEL_36221 = 'component_36221';
export function Component36221({ value = 36221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36221, 'data-value': derived.doubled }, children);
}
export default Component36221;
