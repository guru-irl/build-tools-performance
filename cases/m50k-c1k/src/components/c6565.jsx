import React from 'react';
const LABEL_6565 = 'component_6565';
export function Component6565({ value = 6565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6565, 'data-value': derived.doubled }, children);
}
export default Component6565;
