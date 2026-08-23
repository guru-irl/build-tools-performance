import React from 'react';
const LABEL_32773 = 'component_32773';
export function Component32773({ value = 32773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32773, 'data-value': derived.doubled }, children);
}
export default Component32773;
