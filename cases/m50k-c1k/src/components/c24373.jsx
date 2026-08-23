import React from 'react';
const LABEL_24373 = 'component_24373';
export function Component24373({ value = 24373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24373, 'data-value': derived.doubled }, children);
}
export default Component24373;
