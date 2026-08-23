import React from 'react';
const LABEL_27537 = 'component_27537';
export function Component27537({ value = 27537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27537, 'data-value': derived.doubled }, children);
}
export default Component27537;
