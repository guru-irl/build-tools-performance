import React from 'react';
const LABEL_32925 = 'component_32925';
export function Component32925({ value = 32925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32925, 'data-value': derived.doubled }, children);
}
export default Component32925;
