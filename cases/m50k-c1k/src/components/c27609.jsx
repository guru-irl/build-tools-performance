import React from 'react';
const LABEL_27609 = 'component_27609';
export function Component27609({ value = 27609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27609, 'data-value': derived.doubled }, children);
}
export default Component27609;
