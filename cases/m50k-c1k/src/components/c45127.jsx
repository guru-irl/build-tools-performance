import React from 'react';
const LABEL_45127 = 'component_45127';
export function Component45127({ value = 45127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45127, 'data-value': derived.doubled }, children);
}
export default Component45127;
