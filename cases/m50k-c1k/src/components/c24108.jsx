import React from 'react';
const LABEL_24108 = 'component_24108';
export function Component24108({ value = 24108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24108, 'data-value': derived.doubled }, children);
}
export default Component24108;
