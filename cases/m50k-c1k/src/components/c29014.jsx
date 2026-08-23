import React from 'react';
const LABEL_29014 = 'component_29014';
export function Component29014({ value = 29014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29014, 'data-value': derived.doubled }, children);
}
export default Component29014;
