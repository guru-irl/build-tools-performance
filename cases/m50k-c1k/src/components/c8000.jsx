import React from 'react';
const LABEL_8000 = 'component_8000';
export function Component8000({ value = 8000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8000, 'data-value': derived.doubled }, children);
}
export default Component8000;
