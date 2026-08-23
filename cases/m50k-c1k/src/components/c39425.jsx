import React from 'react';
const LABEL_39425 = 'component_39425';
export function Component39425({ value = 39425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39425, 'data-value': derived.doubled }, children);
}
export default Component39425;
