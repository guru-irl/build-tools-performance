import React from 'react';
const LABEL_29802 = 'component_29802';
export function Component29802({ value = 29802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29802, 'data-value': derived.doubled }, children);
}
export default Component29802;
