import React from 'react';
const LABEL_18211 = 'component_18211';
export function Component18211({ value = 18211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18211, 'data-value': derived.doubled }, children);
}
export default Component18211;
