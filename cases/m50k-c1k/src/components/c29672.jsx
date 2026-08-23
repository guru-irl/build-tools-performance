import React from 'react';
const LABEL_29672 = 'component_29672';
export function Component29672({ value = 29672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29672, 'data-value': derived.doubled }, children);
}
export default Component29672;
