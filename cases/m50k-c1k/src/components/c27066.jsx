import React from 'react';
const LABEL_27066 = 'component_27066';
export function Component27066({ value = 27066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27066, 'data-value': derived.doubled }, children);
}
export default Component27066;
