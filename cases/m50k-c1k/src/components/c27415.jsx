import React from 'react';
const LABEL_27415 = 'component_27415';
export function Component27415({ value = 27415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27415, 'data-value': derived.doubled }, children);
}
export default Component27415;
