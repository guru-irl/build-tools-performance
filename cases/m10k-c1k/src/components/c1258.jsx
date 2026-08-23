import React from 'react';
const LABEL_1258 = 'component_1258';
export function Component1258({ value = 1258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1258, 'data-value': derived.doubled }, children);
}
export default Component1258;
