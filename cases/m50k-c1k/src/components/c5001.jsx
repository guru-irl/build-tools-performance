import React from 'react';
const LABEL_5001 = 'component_5001';
export function Component5001({ value = 5001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5001, 'data-value': derived.doubled }, children);
}
export default Component5001;
