import React from 'react';
const LABEL_12507 = 'component_12507';
export function Component12507({ value = 12507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12507, 'data-value': derived.doubled }, children);
}
export default Component12507;
