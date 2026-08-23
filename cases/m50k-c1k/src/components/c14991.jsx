import React from 'react';
const LABEL_14991 = 'component_14991';
export function Component14991({ value = 14991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14991, 'data-value': derived.doubled }, children);
}
export default Component14991;
