import React from 'react';
const LABEL_23025 = 'component_23025';
export function Component23025({ value = 23025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23025, 'data-value': derived.doubled }, children);
}
export default Component23025;
