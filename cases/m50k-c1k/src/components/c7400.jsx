import React from 'react';
const LABEL_7400 = 'component_7400';
export function Component7400({ value = 7400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7400, 'data-value': derived.doubled }, children);
}
export default Component7400;
