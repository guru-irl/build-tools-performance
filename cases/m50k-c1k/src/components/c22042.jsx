import React from 'react';
const LABEL_22042 = 'component_22042';
export function Component22042({ value = 22042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22042, 'data-value': derived.doubled }, children);
}
export default Component22042;
