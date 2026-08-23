import React from 'react';
const LABEL_36720 = 'component_36720';
export function Component36720({ value = 36720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36720, 'data-value': derived.doubled }, children);
}
export default Component36720;
