import React from 'react';
const LABEL_8372 = 'component_8372';
export function Component8372({ value = 8372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8372, 'data-value': derived.doubled }, children);
}
export default Component8372;
