import React from 'react';
const LABEL_6507 = 'component_6507';
export function Component6507({ value = 6507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6507, 'data-value': derived.doubled }, children);
}
export default Component6507;
