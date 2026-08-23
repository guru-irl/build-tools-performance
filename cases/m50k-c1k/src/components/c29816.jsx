import React from 'react';
const LABEL_29816 = 'component_29816';
export function Component29816({ value = 29816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29816, 'data-value': derived.doubled }, children);
}
export default Component29816;
