import React from 'react';
const LABEL_24840 = 'component_24840';
export function Component24840({ value = 24840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24840, 'data-value': derived.doubled }, children);
}
export default Component24840;
