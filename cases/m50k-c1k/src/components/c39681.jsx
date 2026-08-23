import React from 'react';
const LABEL_39681 = 'component_39681';
export function Component39681({ value = 39681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39681, 'data-value': derived.doubled }, children);
}
export default Component39681;
