import React from 'react';
const LABEL_13073 = 'component_13073';
export function Component13073({ value = 13073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13073, 'data-value': derived.doubled }, children);
}
export default Component13073;
