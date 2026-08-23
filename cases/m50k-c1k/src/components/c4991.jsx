import React from 'react';
const LABEL_4991 = 'component_4991';
export function Component4991({ value = 4991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4991, 'data-value': derived.doubled }, children);
}
export default Component4991;
