import React from 'react';
const LABEL_13616 = 'component_13616';
export function Component13616({ value = 13616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13616, 'data-value': derived.doubled }, children);
}
export default Component13616;
