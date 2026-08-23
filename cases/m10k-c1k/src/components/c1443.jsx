import React from 'react';
const LABEL_1443 = 'component_1443';
export function Component1443({ value = 1443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1443, 'data-value': derived.doubled }, children);
}
export default Component1443;
