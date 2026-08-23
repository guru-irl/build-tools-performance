import React from 'react';
const LABEL_7932 = 'component_7932';
export function Component7932({ value = 7932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7932, 'data-value': derived.doubled }, children);
}
export default Component7932;
