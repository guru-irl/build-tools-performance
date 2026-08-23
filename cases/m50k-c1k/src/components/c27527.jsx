import React from 'react';
const LABEL_27527 = 'component_27527';
export function Component27527({ value = 27527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27527, 'data-value': derived.doubled }, children);
}
export default Component27527;
