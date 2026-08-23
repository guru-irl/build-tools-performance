import React from 'react';
const LABEL_32076 = 'component_32076';
export function Component32076({ value = 32076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32076, 'data-value': derived.doubled }, children);
}
export default Component32076;
