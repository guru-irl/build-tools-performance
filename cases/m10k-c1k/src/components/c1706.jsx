import React from 'react';
const LABEL_1706 = 'component_1706';
export function Component1706({ value = 1706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1706, 'data-value': derived.doubled }, children);
}
export default Component1706;
