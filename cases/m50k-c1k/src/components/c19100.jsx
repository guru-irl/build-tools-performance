import React from 'react';
const LABEL_19100 = 'component_19100';
export function Component19100({ value = 19100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19100, 'data-value': derived.doubled }, children);
}
export default Component19100;
