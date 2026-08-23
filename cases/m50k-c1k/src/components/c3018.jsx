import React from 'react';
const LABEL_3018 = 'component_3018';
export function Component3018({ value = 3018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3018, 'data-value': derived.doubled }, children);
}
export default Component3018;
