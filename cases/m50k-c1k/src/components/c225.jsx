import React from 'react';
const LABEL_225 = 'component_225';
export function Component225({ value = 225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_225, 'data-value': derived.doubled }, children);
}
export default Component225;
