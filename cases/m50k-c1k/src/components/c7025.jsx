import React from 'react';
const LABEL_7025 = 'component_7025';
export function Component7025({ value = 7025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7025, 'data-value': derived.doubled }, children);
}
export default Component7025;
