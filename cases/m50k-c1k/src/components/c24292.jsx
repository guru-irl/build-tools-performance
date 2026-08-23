import React from 'react';
const LABEL_24292 = 'component_24292';
export function Component24292({ value = 24292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24292, 'data-value': derived.doubled }, children);
}
export default Component24292;
