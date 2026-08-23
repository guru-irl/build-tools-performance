import React from 'react';
const LABEL_27159 = 'component_27159';
export function Component27159({ value = 27159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27159, 'data-value': derived.doubled }, children);
}
export default Component27159;
