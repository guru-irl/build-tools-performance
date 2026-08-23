import React from 'react';
const LABEL_24910 = 'component_24910';
export function Component24910({ value = 24910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24910, 'data-value': derived.doubled }, children);
}
export default Component24910;
