import React from 'react';
const LABEL_41597 = 'component_41597';
export function Component41597({ value = 41597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41597, 'data-value': derived.doubled }, children);
}
export default Component41597;
