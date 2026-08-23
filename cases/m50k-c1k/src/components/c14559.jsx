import React from 'react';
const LABEL_14559 = 'component_14559';
export function Component14559({ value = 14559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14559, 'data-value': derived.doubled }, children);
}
export default Component14559;
