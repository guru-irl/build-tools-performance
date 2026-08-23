import React from 'react';
const LABEL_3615 = 'component_3615';
export function Component3615({ value = 3615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3615, 'data-value': derived.doubled }, children);
}
export default Component3615;
