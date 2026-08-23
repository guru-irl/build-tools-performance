import React from 'react';
const LABEL_39244 = 'component_39244';
export function Component39244({ value = 39244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39244, 'data-value': derived.doubled }, children);
}
export default Component39244;
