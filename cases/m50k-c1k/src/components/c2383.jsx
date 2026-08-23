import React from 'react';
const LABEL_2383 = 'component_2383';
export function Component2383({ value = 2383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2383, 'data-value': derived.doubled }, children);
}
export default Component2383;
