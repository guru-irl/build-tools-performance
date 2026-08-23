import React from 'react';
const LABEL_1368 = 'component_1368';
export function Component1368({ value = 1368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1368, 'data-value': derived.doubled }, children);
}
export default Component1368;
