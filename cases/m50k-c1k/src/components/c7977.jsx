import React from 'react';
const LABEL_7977 = 'component_7977';
export function Component7977({ value = 7977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7977, 'data-value': derived.doubled }, children);
}
export default Component7977;
