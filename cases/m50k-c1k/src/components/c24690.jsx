import React from 'react';
const LABEL_24690 = 'component_24690';
export function Component24690({ value = 24690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24690, 'data-value': derived.doubled }, children);
}
export default Component24690;
