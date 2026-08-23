import React from 'react';
const LABEL_39352 = 'component_39352';
export function Component39352({ value = 39352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39352, 'data-value': derived.doubled }, children);
}
export default Component39352;
