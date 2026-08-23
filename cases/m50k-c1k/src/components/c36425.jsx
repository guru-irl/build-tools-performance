import React from 'react';
const LABEL_36425 = 'component_36425';
export function Component36425({ value = 36425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36425, 'data-value': derived.doubled }, children);
}
export default Component36425;
