import React from 'react';
const LABEL_5928 = 'component_5928';
export function Component5928({ value = 5928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5928, 'data-value': derived.doubled }, children);
}
export default Component5928;
