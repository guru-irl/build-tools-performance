import React from 'react';
const LABEL_46025 = 'component_46025';
export function Component46025({ value = 46025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46025, 'data-value': derived.doubled }, children);
}
export default Component46025;
