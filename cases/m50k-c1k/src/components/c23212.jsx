import React from 'react';
const LABEL_23212 = 'component_23212';
export function Component23212({ value = 23212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23212, 'data-value': derived.doubled }, children);
}
export default Component23212;
