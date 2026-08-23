import React from 'react';
const LABEL_40959 = 'component_40959';
export function Component40959({ value = 40959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40959, 'data-value': derived.doubled }, children);
}
export default Component40959;
