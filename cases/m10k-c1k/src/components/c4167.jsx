import React from 'react';
const LABEL_4167 = 'component_4167';
export function Component4167({ value = 4167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4167, 'data-value': derived.doubled }, children);
}
export default Component4167;
