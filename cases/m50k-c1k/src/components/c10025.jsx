import React from 'react';
const LABEL_10025 = 'component_10025';
export function Component10025({ value = 10025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10025, 'data-value': derived.doubled }, children);
}
export default Component10025;
