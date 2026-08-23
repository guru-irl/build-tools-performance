import React from 'react';
const LABEL_37560 = 'component_37560';
export function Component37560({ value = 37560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37560, 'data-value': derived.doubled }, children);
}
export default Component37560;
