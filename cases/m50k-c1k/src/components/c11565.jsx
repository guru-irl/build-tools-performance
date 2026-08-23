import React from 'react';
const LABEL_11565 = 'component_11565';
export function Component11565({ value = 11565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11565, 'data-value': derived.doubled }, children);
}
export default Component11565;
