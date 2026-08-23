import React from 'react';
const LABEL_5992 = 'component_5992';
export function Component5992({ value = 5992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5992, 'data-value': derived.doubled }, children);
}
export default Component5992;
