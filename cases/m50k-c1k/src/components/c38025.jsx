import React from 'react';
const LABEL_38025 = 'component_38025';
export function Component38025({ value = 38025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38025, 'data-value': derived.doubled }, children);
}
export default Component38025;
