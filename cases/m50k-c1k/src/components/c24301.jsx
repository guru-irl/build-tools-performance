import React from 'react';
const LABEL_24301 = 'component_24301';
export function Component24301({ value = 24301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24301, 'data-value': derived.doubled }, children);
}
export default Component24301;
