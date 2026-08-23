import React from 'react';
const LABEL_8928 = 'component_8928';
export function Component8928({ value = 8928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8928, 'data-value': derived.doubled }, children);
}
export default Component8928;
