import React from 'react';
const LABEL_20606 = 'component_20606';
export function Component20606({ value = 20606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20606, 'data-value': derived.doubled }, children);
}
export default Component20606;
