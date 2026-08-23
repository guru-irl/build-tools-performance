import React from 'react';
const LABEL_44974 = 'component_44974';
export function Component44974({ value = 44974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44974, 'data-value': derived.doubled }, children);
}
export default Component44974;
