import React from 'react';
const LABEL_46544 = 'component_46544';
export function Component46544({ value = 46544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46544, 'data-value': derived.doubled }, children);
}
export default Component46544;
