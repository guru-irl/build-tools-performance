import React from 'react';
const LABEL_36415 = 'component_36415';
export function Component36415({ value = 36415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36415, 'data-value': derived.doubled }, children);
}
export default Component36415;
