import React from 'react';
const LABEL_502 = 'component_502';
export function Component502({ value = 502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_502, 'data-value': derived.doubled }, children);
}
export default Component502;
