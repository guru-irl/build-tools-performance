import React from 'react';
const LABEL_42225 = 'component_42225';
export function Component42225({ value = 42225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42225, 'data-value': derived.doubled }, children);
}
export default Component42225;
