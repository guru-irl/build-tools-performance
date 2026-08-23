import React from 'react';
const LABEL_27042 = 'component_27042';
export function Component27042({ value = 27042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27042, 'data-value': derived.doubled }, children);
}
export default Component27042;
