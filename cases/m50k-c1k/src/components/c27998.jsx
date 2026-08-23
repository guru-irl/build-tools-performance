import React from 'react';
const LABEL_27998 = 'component_27998';
export function Component27998({ value = 27998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27998, 'data-value': derived.doubled }, children);
}
export default Component27998;
