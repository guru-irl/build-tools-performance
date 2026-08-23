import React from 'react';
const LABEL_10991 = 'component_10991';
export function Component10991({ value = 10991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10991, 'data-value': derived.doubled }, children);
}
export default Component10991;
