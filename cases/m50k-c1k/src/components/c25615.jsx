import React from 'react';
const LABEL_25615 = 'component_25615';
export function Component25615({ value = 25615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25615, 'data-value': derived.doubled }, children);
}
export default Component25615;
