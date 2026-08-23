import React from 'react';
const LABEL_8459 = 'component_8459';
export function Component8459({ value = 8459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8459, 'data-value': derived.doubled }, children);
}
export default Component8459;
