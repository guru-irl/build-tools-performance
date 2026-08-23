import React from 'react';
const LABEL_14792 = 'component_14792';
export function Component14792({ value = 14792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14792, 'data-value': derived.doubled }, children);
}
export default Component14792;
