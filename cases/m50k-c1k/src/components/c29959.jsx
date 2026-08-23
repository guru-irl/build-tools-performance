import React from 'react';
const LABEL_29959 = 'component_29959';
export function Component29959({ value = 29959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29959, 'data-value': derived.doubled }, children);
}
export default Component29959;
