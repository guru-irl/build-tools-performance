import React from 'react';
const LABEL_7507 = 'component_7507';
export function Component7507({ value = 7507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7507, 'data-value': derived.doubled }, children);
}
export default Component7507;
