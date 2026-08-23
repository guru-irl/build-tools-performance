import React from 'react';
const LABEL_37219 = 'component_37219';
export function Component37219({ value = 37219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37219, 'data-value': derived.doubled }, children);
}
export default Component37219;
