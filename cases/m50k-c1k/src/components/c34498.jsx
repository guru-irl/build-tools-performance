import React from 'react';
const LABEL_34498 = 'component_34498';
export function Component34498({ value = 34498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34498, 'data-value': derived.doubled }, children);
}
export default Component34498;
