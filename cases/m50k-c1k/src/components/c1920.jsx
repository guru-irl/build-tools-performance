import React from 'react';
const LABEL_1920 = 'component_1920';
export function Component1920({ value = 1920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1920, 'data-value': derived.doubled }, children);
}
export default Component1920;
