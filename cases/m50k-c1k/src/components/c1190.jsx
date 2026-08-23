import React from 'react';
const LABEL_1190 = 'component_1190';
export function Component1190({ value = 1190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1190, 'data-value': derived.doubled }, children);
}
export default Component1190;
