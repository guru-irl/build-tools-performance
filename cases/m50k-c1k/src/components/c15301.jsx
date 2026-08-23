import React from 'react';
const LABEL_15301 = 'component_15301';
export function Component15301({ value = 15301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15301, 'data-value': derived.doubled }, children);
}
export default Component15301;
