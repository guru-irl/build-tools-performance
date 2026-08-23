import React from 'react';
const LABEL_16239 = 'component_16239';
export function Component16239({ value = 16239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16239, 'data-value': derived.doubled }, children);
}
export default Component16239;
