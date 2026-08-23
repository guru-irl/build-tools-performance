import React from 'react';
const LABEL_18953 = 'component_18953';
export function Component18953({ value = 18953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18953, 'data-value': derived.doubled }, children);
}
export default Component18953;
