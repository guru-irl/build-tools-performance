import React from 'react';
const LABEL_27498 = 'component_27498';
export function Component27498({ value = 27498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27498, 'data-value': derived.doubled }, children);
}
export default Component27498;
