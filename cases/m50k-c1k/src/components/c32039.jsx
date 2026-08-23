import React from 'react';
const LABEL_32039 = 'component_32039';
export function Component32039({ value = 32039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32039, 'data-value': derived.doubled }, children);
}
export default Component32039;
