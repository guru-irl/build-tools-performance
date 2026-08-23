import React from 'react';
const LABEL_15932 = 'component_15932';
export function Component15932({ value = 15932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15932, 'data-value': derived.doubled }, children);
}
export default Component15932;
