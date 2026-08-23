import React from 'react';
const LABEL_16888 = 'component_16888';
export function Component16888({ value = 16888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16888, 'data-value': derived.doubled }, children);
}
export default Component16888;
