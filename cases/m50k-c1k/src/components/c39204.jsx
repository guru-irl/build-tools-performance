import React from 'react';
const LABEL_39204 = 'component_39204';
export function Component39204({ value = 39204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39204, 'data-value': derived.doubled }, children);
}
export default Component39204;
