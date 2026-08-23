import React from 'react';
const LABEL_24928 = 'component_24928';
export function Component24928({ value = 24928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24928, 'data-value': derived.doubled }, children);
}
export default Component24928;
