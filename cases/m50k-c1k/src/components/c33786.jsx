import React from 'react';
const LABEL_33786 = 'component_33786';
export function Component33786({ value = 33786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33786, 'data-value': derived.doubled }, children);
}
export default Component33786;
