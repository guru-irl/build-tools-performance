import React from 'react';
const LABEL_24184 = 'component_24184';
export function Component24184({ value = 24184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24184, 'data-value': derived.doubled }, children);
}
export default Component24184;
