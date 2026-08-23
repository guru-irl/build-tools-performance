import React from 'react';
const LABEL_30089 = 'component_30089';
export function Component30089({ value = 30089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30089, 'data-value': derived.doubled }, children);
}
export default Component30089;
