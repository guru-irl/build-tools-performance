import React from 'react';
const LABEL_36559 = 'component_36559';
export function Component36559({ value = 36559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36559, 'data-value': derived.doubled }, children);
}
export default Component36559;
