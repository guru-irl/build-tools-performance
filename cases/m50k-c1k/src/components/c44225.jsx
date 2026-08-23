import React from 'react';
const LABEL_44225 = 'component_44225';
export function Component44225({ value = 44225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44225, 'data-value': derived.doubled }, children);
}
export default Component44225;
