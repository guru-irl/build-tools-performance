import React from 'react';
const LABEL_10644 = 'component_10644';
export function Component10644({ value = 10644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10644, 'data-value': derived.doubled }, children);
}
export default Component10644;
