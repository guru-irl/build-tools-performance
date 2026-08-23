import React from 'react';
const LABEL_11484 = 'component_11484';
export function Component11484({ value = 11484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11484, 'data-value': derived.doubled }, children);
}
export default Component11484;
