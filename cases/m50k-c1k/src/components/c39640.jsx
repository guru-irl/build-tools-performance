import React from 'react';
const LABEL_39640 = 'component_39640';
export function Component39640({ value = 39640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39640, 'data-value': derived.doubled }, children);
}
export default Component39640;
