import React from 'react';
const LABEL_20385 = 'component_20385';
export function Component20385({ value = 20385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20385, 'data-value': derived.doubled }, children);
}
export default Component20385;
