import React from 'react';
const LABEL_11225 = 'component_11225';
export function Component11225({ value = 11225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11225, 'data-value': derived.doubled }, children);
}
export default Component11225;
