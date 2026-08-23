import React from 'react';
const LABEL_10629 = 'component_10629';
export function Component10629({ value = 10629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10629, 'data-value': derived.doubled }, children);
}
export default Component10629;
