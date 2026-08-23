import React from 'react';
const LABEL_27884 = 'component_27884';
export function Component27884({ value = 27884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27884, 'data-value': derived.doubled }, children);
}
export default Component27884;
