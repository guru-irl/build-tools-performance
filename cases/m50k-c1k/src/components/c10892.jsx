import React from 'react';
const LABEL_10892 = 'component_10892';
export function Component10892({ value = 10892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10892, 'data-value': derived.doubled }, children);
}
export default Component10892;
