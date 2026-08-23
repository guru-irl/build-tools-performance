import React from 'react';
const LABEL_5804 = 'component_5804';
export function Component5804({ value = 5804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5804, 'data-value': derived.doubled }, children);
}
export default Component5804;
