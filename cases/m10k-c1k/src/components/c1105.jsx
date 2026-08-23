import React from 'react';
const LABEL_1105 = 'component_1105';
export function Component1105({ value = 1105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1105, 'data-value': derived.doubled }, children);
}
export default Component1105;
