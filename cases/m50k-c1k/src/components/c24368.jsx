import React from 'react';
const LABEL_24368 = 'component_24368';
export function Component24368({ value = 24368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24368, 'data-value': derived.doubled }, children);
}
export default Component24368;
