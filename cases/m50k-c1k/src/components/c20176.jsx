import React from 'react';
const LABEL_20176 = 'component_20176';
export function Component20176({ value = 20176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20176, 'data-value': derived.doubled }, children);
}
export default Component20176;
