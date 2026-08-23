import React from 'react';
const LABEL_16255 = 'component_16255';
export function Component16255({ value = 16255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16255, 'data-value': derived.doubled }, children);
}
export default Component16255;
