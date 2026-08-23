import React from 'react';
const LABEL_37416 = 'component_37416';
export function Component37416({ value = 37416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37416, 'data-value': derived.doubled }, children);
}
export default Component37416;
