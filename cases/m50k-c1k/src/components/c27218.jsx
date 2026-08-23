import React from 'react';
const LABEL_27218 = 'component_27218';
export function Component27218({ value = 27218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27218, 'data-value': derived.doubled }, children);
}
export default Component27218;
