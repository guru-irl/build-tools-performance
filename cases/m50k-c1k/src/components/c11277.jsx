import React from 'react';
const LABEL_11277 = 'component_11277';
export function Component11277({ value = 11277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11277, 'data-value': derived.doubled }, children);
}
export default Component11277;
