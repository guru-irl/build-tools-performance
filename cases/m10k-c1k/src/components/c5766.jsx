import React from 'react';
const LABEL_5766 = 'component_5766';
export function Component5766({ value = 5766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5766, 'data-value': derived.doubled }, children);
}
export default Component5766;
