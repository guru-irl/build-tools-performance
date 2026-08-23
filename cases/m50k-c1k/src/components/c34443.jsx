import React from 'react';
const LABEL_34443 = 'component_34443';
export function Component34443({ value = 34443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34443, 'data-value': derived.doubled }, children);
}
export default Component34443;
