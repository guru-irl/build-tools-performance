import React from 'react';
const LABEL_5025 = 'component_5025';
export function Component5025({ value = 5025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5025, 'data-value': derived.doubled }, children);
}
export default Component5025;
