import React from 'react';
const LABEL_4959 = 'component_4959';
export function Component4959({ value = 4959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4959, 'data-value': derived.doubled }, children);
}
export default Component4959;
