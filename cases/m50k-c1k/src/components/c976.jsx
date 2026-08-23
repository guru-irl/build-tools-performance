import React from 'react';
const LABEL_976 = 'component_976';
export function Component976({ value = 976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_976, 'data-value': derived.doubled }, children);
}
export default Component976;
