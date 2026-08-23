import React from 'react';
const LABEL_27054 = 'component_27054';
export function Component27054({ value = 27054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27054, 'data-value': derived.doubled }, children);
}
export default Component27054;
