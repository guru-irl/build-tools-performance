import React from 'react';
const LABEL_26382 = 'component_26382';
export function Component26382({ value = 26382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26382, 'data-value': derived.doubled }, children);
}
export default Component26382;
