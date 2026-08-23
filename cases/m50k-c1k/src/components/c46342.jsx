import React from 'react';
const LABEL_46342 = 'component_46342';
export function Component46342({ value = 46342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46342, 'data-value': derived.doubled }, children);
}
export default Component46342;
