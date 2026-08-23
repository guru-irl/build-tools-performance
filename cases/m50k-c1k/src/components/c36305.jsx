import React from 'react';
const LABEL_36305 = 'component_36305';
export function Component36305({ value = 36305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36305, 'data-value': derived.doubled }, children);
}
export default Component36305;
