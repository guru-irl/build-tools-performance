import React from 'react';
const LABEL_5640 = 'component_5640';
export function Component5640({ value = 5640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5640, 'data-value': derived.doubled }, children);
}
export default Component5640;
