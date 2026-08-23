import React from 'react';
const LABEL_39225 = 'component_39225';
export function Component39225({ value = 39225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39225, 'data-value': derived.doubled }, children);
}
export default Component39225;
