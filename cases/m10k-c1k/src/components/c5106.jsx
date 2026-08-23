import React from 'react';
const LABEL_5106 = 'component_5106';
export function Component5106({ value = 5106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5106, 'data-value': derived.doubled }, children);
}
export default Component5106;
