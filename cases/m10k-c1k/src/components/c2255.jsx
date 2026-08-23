import React from 'react';
const LABEL_2255 = 'component_2255';
export function Component2255({ value = 2255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2255, 'data-value': derived.doubled }, children);
}
export default Component2255;
