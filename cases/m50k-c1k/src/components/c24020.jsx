import React from 'react';
const LABEL_24020 = 'component_24020';
export function Component24020({ value = 24020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24020, 'data-value': derived.doubled }, children);
}
export default Component24020;
