import React from 'react';
const LABEL_43703 = 'component_43703';
export function Component43703({ value = 43703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43703, 'data-value': derived.doubled }, children);
}
export default Component43703;
