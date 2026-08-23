import React from 'react';
const LABEL_24449 = 'component_24449';
export function Component24449({ value = 24449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24449, 'data-value': derived.doubled }, children);
}
export default Component24449;
