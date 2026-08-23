import React from 'react';
const LABEL_14802 = 'component_14802';
export function Component14802({ value = 14802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14802, 'data-value': derived.doubled }, children);
}
export default Component14802;
