import React from 'react';
const LABEL_24022 = 'component_24022';
export function Component24022({ value = 24022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24022, 'data-value': derived.doubled }, children);
}
export default Component24022;
