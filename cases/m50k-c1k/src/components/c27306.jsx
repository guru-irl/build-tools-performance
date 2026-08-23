import React from 'react';
const LABEL_27306 = 'component_27306';
export function Component27306({ value = 27306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27306, 'data-value': derived.doubled }, children);
}
export default Component27306;
