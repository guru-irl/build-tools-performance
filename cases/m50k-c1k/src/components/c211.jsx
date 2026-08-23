import React from 'react';
const LABEL_211 = 'component_211';
export function Component211({ value = 211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_211, 'data-value': derived.doubled }, children);
}
export default Component211;
