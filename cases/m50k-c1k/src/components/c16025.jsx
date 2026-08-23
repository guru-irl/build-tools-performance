import React from 'react';
const LABEL_16025 = 'component_16025';
export function Component16025({ value = 16025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16025, 'data-value': derived.doubled }, children);
}
export default Component16025;
