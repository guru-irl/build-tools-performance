import React from 'react';
const LABEL_31690 = 'component_31690';
export function Component31690({ value = 31690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31690, 'data-value': derived.doubled }, children);
}
export default Component31690;
