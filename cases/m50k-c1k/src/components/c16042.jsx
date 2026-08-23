import React from 'react';
const LABEL_16042 = 'component_16042';
export function Component16042({ value = 16042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16042, 'data-value': derived.doubled }, children);
}
export default Component16042;
