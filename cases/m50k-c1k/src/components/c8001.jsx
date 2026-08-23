import React from 'react';
const LABEL_8001 = 'component_8001';
export function Component8001({ value = 8001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8001, 'data-value': derived.doubled }, children);
}
export default Component8001;
