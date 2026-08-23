import React from 'react';
const LABEL_24073 = 'component_24073';
export function Component24073({ value = 24073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24073, 'data-value': derived.doubled }, children);
}
export default Component24073;
