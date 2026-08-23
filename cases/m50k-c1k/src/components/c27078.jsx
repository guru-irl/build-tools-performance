import React from 'react';
const LABEL_27078 = 'component_27078';
export function Component27078({ value = 27078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27078, 'data-value': derived.doubled }, children);
}
export default Component27078;
