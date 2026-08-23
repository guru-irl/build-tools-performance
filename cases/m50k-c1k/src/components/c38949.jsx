import React from 'react';
const LABEL_38949 = 'component_38949';
export function Component38949({ value = 38949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38949, 'data-value': derived.doubled }, children);
}
export default Component38949;
