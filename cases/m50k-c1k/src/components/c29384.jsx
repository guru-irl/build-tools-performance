import React from 'react';
const LABEL_29384 = 'component_29384';
export function Component29384({ value = 29384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29384, 'data-value': derived.doubled }, children);
}
export default Component29384;
