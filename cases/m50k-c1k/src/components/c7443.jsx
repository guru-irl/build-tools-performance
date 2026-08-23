import React from 'react';
const LABEL_7443 = 'component_7443';
export function Component7443({ value = 7443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7443, 'data-value': derived.doubled }, children);
}
export default Component7443;
