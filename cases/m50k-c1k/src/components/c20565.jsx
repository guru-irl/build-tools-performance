import React from 'react';
const LABEL_20565 = 'component_20565';
export function Component20565({ value = 20565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20565, 'data-value': derived.doubled }, children);
}
export default Component20565;
