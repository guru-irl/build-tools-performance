import React from 'react';
const LABEL_27953 = 'component_27953';
export function Component27953({ value = 27953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27953, 'data-value': derived.doubled }, children);
}
export default Component27953;
