import React from 'react';
const LABEL_6383 = 'component_6383';
export function Component6383({ value = 6383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6383, 'data-value': derived.doubled }, children);
}
export default Component6383;
