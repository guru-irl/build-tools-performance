import React from 'react';
const LABEL_29045 = 'component_29045';
export function Component29045({ value = 29045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29045, 'data-value': derived.doubled }, children);
}
export default Component29045;
