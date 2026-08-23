import React from 'react';
const LABEL_977 = 'component_977';
export function Component977({ value = 977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_977, 'data-value': derived.doubled }, children);
}
export default Component977;
