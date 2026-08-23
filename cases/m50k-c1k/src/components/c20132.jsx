import React from 'react';
const LABEL_20132 = 'component_20132';
export function Component20132({ value = 20132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20132, 'data-value': derived.doubled }, children);
}
export default Component20132;
