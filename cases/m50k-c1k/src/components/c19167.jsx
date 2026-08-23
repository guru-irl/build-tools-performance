import React from 'react';
const LABEL_19167 = 'component_19167';
export function Component19167({ value = 19167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19167, 'data-value': derived.doubled }, children);
}
export default Component19167;
