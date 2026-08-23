import React from 'react';
const LABEL_29585 = 'component_29585';
export function Component29585({ value = 29585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29585, 'data-value': derived.doubled }, children);
}
export default Component29585;
