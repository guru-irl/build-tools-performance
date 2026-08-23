import React from 'react';
const LABEL_29073 = 'component_29073';
export function Component29073({ value = 29073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29073, 'data-value': derived.doubled }, children);
}
export default Component29073;
