import React from 'react';
const LABEL_31411 = 'component_31411';
export function Component31411({ value = 31411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31411, 'data-value': derived.doubled }, children);
}
export default Component31411;
