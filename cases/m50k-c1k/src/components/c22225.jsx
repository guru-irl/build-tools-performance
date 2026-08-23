import React from 'react';
const LABEL_22225 = 'component_22225';
export function Component22225({ value = 22225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22225, 'data-value': derived.doubled }, children);
}
export default Component22225;
