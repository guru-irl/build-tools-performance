import React from 'react';
const LABEL_9215 = 'component_9215';
export function Component9215({ value = 9215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9215, 'data-value': derived.doubled }, children);
}
export default Component9215;
