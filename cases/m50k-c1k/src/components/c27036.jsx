import React from 'react';
const LABEL_27036 = 'component_27036';
export function Component27036({ value = 27036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27036, 'data-value': derived.doubled }, children);
}
export default Component27036;
