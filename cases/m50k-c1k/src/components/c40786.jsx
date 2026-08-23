import React from 'react';
const LABEL_40786 = 'component_40786';
export function Component40786({ value = 40786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40786, 'data-value': derived.doubled }, children);
}
export default Component40786;
