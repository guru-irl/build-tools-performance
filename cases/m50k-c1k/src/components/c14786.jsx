import React from 'react';
const LABEL_14786 = 'component_14786';
export function Component14786({ value = 14786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14786, 'data-value': derived.doubled }, children);
}
export default Component14786;
