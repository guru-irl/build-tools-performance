import React from 'react';
const LABEL_10802 = 'component_10802';
export function Component10802({ value = 10802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10802, 'data-value': derived.doubled }, children);
}
export default Component10802;
