import React from 'react';
const LABEL_12089 = 'component_12089';
export function Component12089({ value = 12089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12089, 'data-value': derived.doubled }, children);
}
export default Component12089;
