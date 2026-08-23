import React from 'react';
const LABEL_12562 = 'component_12562';
export function Component12562({ value = 12562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12562, 'data-value': derived.doubled }, children);
}
export default Component12562;
