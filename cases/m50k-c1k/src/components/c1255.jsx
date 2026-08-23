import React from 'react';
const LABEL_1255 = 'component_1255';
export function Component1255({ value = 1255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1255, 'data-value': derived.doubled }, children);
}
export default Component1255;
