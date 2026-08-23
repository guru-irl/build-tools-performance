import React from 'react';
const LABEL_46418 = 'component_46418';
export function Component46418({ value = 46418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46418, 'data-value': derived.doubled }, children);
}
export default Component46418;
