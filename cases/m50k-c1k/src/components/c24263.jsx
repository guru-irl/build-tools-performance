import React from 'react';
const LABEL_24263 = 'component_24263';
export function Component24263({ value = 24263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24263, 'data-value': derived.doubled }, children);
}
export default Component24263;
