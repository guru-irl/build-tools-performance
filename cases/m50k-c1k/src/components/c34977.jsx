import React from 'react';
const LABEL_34977 = 'component_34977';
export function Component34977({ value = 34977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34977, 'data-value': derived.doubled }, children);
}
export default Component34977;
