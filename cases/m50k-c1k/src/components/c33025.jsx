import React from 'react';
const LABEL_33025 = 'component_33025';
export function Component33025({ value = 33025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33025, 'data-value': derived.doubled }, children);
}
export default Component33025;
