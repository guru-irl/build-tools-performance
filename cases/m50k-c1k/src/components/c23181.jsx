import React from 'react';
const LABEL_23181 = 'component_23181';
export function Component23181({ value = 23181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23181, 'data-value': derived.doubled }, children);
}
export default Component23181;
