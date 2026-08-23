import React from 'react';
const LABEL_46301 = 'component_46301';
export function Component46301({ value = 46301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46301, 'data-value': derived.doubled }, children);
}
export default Component46301;
