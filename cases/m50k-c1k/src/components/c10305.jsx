import React from 'react';
const LABEL_10305 = 'component_10305';
export function Component10305({ value = 10305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10305, 'data-value': derived.doubled }, children);
}
export default Component10305;
