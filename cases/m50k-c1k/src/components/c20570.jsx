import React from 'react';
const LABEL_20570 = 'component_20570';
export function Component20570({ value = 20570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20570, 'data-value': derived.doubled }, children);
}
export default Component20570;
