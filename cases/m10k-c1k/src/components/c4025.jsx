import React from 'react';
const LABEL_4025 = 'component_4025';
export function Component4025({ value = 4025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4025, 'data-value': derived.doubled }, children);
}
export default Component4025;
