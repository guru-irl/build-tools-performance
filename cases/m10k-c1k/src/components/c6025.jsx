import React from 'react';
const LABEL_6025 = 'component_6025';
export function Component6025({ value = 6025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6025, 'data-value': derived.doubled }, children);
}
export default Component6025;
