import React from 'react';
const LABEL_1713 = 'component_1713';
export function Component1713({ value = 1713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1713, 'data-value': derived.doubled }, children);
}
export default Component1713;
