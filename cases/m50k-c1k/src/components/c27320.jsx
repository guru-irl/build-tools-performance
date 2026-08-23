import React from 'react';
const LABEL_27320 = 'component_27320';
export function Component27320({ value = 27320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27320, 'data-value': derived.doubled }, children);
}
export default Component27320;
