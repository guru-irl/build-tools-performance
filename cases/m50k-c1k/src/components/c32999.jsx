import React from 'react';
const LABEL_32999 = 'component_32999';
export function Component32999({ value = 32999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32999, 'data-value': derived.doubled }, children);
}
export default Component32999;
