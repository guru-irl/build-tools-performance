import React from 'react';
const LABEL_13539 = 'component_13539';
export function Component13539({ value = 13539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13539, 'data-value': derived.doubled }, children);
}
export default Component13539;
