import React from 'react';
const LABEL_27456 = 'component_27456';
export function Component27456({ value = 27456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27456, 'data-value': derived.doubled }, children);
}
export default Component27456;
