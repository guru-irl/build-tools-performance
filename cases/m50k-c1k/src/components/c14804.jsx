import React from 'react';
const LABEL_14804 = 'component_14804';
export function Component14804({ value = 14804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14804, 'data-value': derived.doubled }, children);
}
export default Component14804;
