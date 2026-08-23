import React from 'react';
const LABEL_36786 = 'component_36786';
export function Component36786({ value = 36786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36786, 'data-value': derived.doubled }, children);
}
export default Component36786;
