import React from 'react';
const LABEL_44912 = 'component_44912';
export function Component44912({ value = 44912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44912, 'data-value': derived.doubled }, children);
}
export default Component44912;
