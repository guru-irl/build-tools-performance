import React from 'react';
const LABEL_6850 = 'component_6850';
export function Component6850({ value = 6850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6850, 'data-value': derived.doubled }, children);
}
export default Component6850;
