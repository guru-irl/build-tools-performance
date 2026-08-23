import React from 'react';
const LABEL_27486 = 'component_27486';
export function Component27486({ value = 27486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27486, 'data-value': derived.doubled }, children);
}
export default Component27486;
