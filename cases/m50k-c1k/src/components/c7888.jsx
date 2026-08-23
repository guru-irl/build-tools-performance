import React from 'react';
const LABEL_7888 = 'component_7888';
export function Component7888({ value = 7888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7888, 'data-value': derived.doubled }, children);
}
export default Component7888;
