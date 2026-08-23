import React from 'react';
const LABEL_1030 = 'component_1030';
export function Component1030({ value = 1030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1030, 'data-value': derived.doubled }, children);
}
export default Component1030;
