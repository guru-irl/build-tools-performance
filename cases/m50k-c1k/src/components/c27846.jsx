import React from 'react';
const LABEL_27846 = 'component_27846';
export function Component27846({ value = 27846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27846, 'data-value': derived.doubled }, children);
}
export default Component27846;
