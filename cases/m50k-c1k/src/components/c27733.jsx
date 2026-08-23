import React from 'react';
const LABEL_27733 = 'component_27733';
export function Component27733({ value = 27733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27733, 'data-value': derived.doubled }, children);
}
export default Component27733;
