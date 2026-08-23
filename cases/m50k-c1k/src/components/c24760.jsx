import React from 'react';
const LABEL_24760 = 'component_24760';
export function Component24760({ value = 24760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24760, 'data-value': derived.doubled }, children);
}
export default Component24760;
