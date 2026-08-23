import React from 'react';
const LABEL_38488 = 'component_38488';
export function Component38488({ value = 38488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38488, 'data-value': derived.doubled }, children);
}
export default Component38488;
