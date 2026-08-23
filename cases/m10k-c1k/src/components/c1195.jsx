import React from 'react';
const LABEL_1195 = 'component_1195';
export function Component1195({ value = 1195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1195, 'data-value': derived.doubled }, children);
}
export default Component1195;
