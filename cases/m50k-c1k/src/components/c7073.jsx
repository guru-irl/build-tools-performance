import React from 'react';
const LABEL_7073 = 'component_7073';
export function Component7073({ value = 7073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7073, 'data-value': derived.doubled }, children);
}
export default Component7073;
