import React from 'react';
const LABEL_45802 = 'component_45802';
export function Component45802({ value = 45802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45802, 'data-value': derived.doubled }, children);
}
export default Component45802;
