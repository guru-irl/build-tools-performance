import React from 'react';
const LABEL_4804 = 'component_4804';
export function Component4804({ value = 4804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4804, 'data-value': derived.doubled }, children);
}
export default Component4804;
