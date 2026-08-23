import React from 'react';
const LABEL_13342 = 'component_13342';
export function Component13342({ value = 13342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13342, 'data-value': derived.doubled }, children);
}
export default Component13342;
