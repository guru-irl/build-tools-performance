import React from 'react';
const LABEL_39565 = 'component_39565';
export function Component39565({ value = 39565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39565, 'data-value': derived.doubled }, children);
}
export default Component39565;
