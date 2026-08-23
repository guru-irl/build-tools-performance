import React from 'react';
const LABEL_2974 = 'component_2974';
export function Component2974({ value = 2974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2974, 'data-value': derived.doubled }, children);
}
export default Component2974;
