import React from 'react';
const LABEL_10565 = 'component_10565';
export function Component10565({ value = 10565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10565, 'data-value': derived.doubled }, children);
}
export default Component10565;
