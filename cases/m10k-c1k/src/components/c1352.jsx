import React from 'react';
const LABEL_1352 = 'component_1352';
export function Component1352({ value = 1352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1352, 'data-value': derived.doubled }, children);
}
export default Component1352;
