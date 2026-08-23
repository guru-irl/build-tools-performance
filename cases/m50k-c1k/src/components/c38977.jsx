import React from 'react';
const LABEL_38977 = 'component_38977';
export function Component38977({ value = 38977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38977, 'data-value': derived.doubled }, children);
}
export default Component38977;
