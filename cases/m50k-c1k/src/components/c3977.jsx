import React from 'react';
const LABEL_3977 = 'component_3977';
export function Component3977({ value = 3977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3977, 'data-value': derived.doubled }, children);
}
export default Component3977;
