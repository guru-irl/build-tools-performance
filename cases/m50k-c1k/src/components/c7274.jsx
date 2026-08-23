import React from 'react';
const LABEL_7274 = 'component_7274';
export function Component7274({ value = 7274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7274, 'data-value': derived.doubled }, children);
}
export default Component7274;
