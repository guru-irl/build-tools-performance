import React from 'react';
const LABEL_24608 = 'component_24608';
export function Component24608({ value = 24608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24608, 'data-value': derived.doubled }, children);
}
export default Component24608;
