import React from 'react';
const LABEL_46443 = 'component_46443';
export function Component46443({ value = 46443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46443, 'data-value': derived.doubled }, children);
}
export default Component46443;
