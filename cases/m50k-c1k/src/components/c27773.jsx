import React from 'react';
const LABEL_27773 = 'component_27773';
export function Component27773({ value = 27773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27773, 'data-value': derived.doubled }, children);
}
export default Component27773;
