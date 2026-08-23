import React from 'react';
const LABEL_38172 = 'component_38172';
export function Component38172({ value = 38172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38172, 'data-value': derived.doubled }, children);
}
export default Component38172;
