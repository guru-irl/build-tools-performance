import React from 'react';
const LABEL_14930 = 'component_14930';
export function Component14930({ value = 14930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14930, 'data-value': derived.doubled }, children);
}
export default Component14930;
