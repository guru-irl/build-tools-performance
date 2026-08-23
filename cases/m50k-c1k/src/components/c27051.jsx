import React from 'react';
const LABEL_27051 = 'component_27051';
export function Component27051({ value = 27051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27051, 'data-value': derived.doubled }, children);
}
export default Component27051;
