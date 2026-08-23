import React from 'react';
const LABEL_39052 = 'component_39052';
export function Component39052({ value = 39052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39052, 'data-value': derived.doubled }, children);
}
export default Component39052;
