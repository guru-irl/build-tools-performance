import React from 'react';
const LABEL_6352 = 'component_6352';
export function Component6352({ value = 6352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6352, 'data-value': derived.doubled }, children);
}
export default Component6352;
