import React from 'react';
const LABEL_1655 = 'component_1655';
export function Component1655({ value = 1655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1655, 'data-value': derived.doubled }, children);
}
export default Component1655;
