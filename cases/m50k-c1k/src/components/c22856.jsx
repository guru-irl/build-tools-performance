import React from 'react';
const LABEL_22856 = 'component_22856';
export function Component22856({ value = 22856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22856, 'data-value': derived.doubled }, children);
}
export default Component22856;
