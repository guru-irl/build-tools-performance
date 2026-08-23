import React from 'react';
const LABEL_32225 = 'component_32225';
export function Component32225({ value = 32225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32225, 'data-value': derived.doubled }, children);
}
export default Component32225;
