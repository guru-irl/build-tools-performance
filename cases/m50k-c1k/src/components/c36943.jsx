import React from 'react';
const LABEL_36943 = 'component_36943';
export function Component36943({ value = 36943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36943, 'data-value': derived.doubled }, children);
}
export default Component36943;
