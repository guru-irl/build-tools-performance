import React from 'react';
const LABEL_1359 = 'component_1359';
export function Component1359({ value = 1359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1359, 'data-value': derived.doubled }, children);
}
export default Component1359;
