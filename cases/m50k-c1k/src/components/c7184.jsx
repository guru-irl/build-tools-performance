import React from 'react';
const LABEL_7184 = 'component_7184';
export function Component7184({ value = 7184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7184, 'data-value': derived.doubled }, children);
}
export default Component7184;
