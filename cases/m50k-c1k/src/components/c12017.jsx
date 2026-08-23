import React from 'react';
const LABEL_12017 = 'component_12017';
export function Component12017({ value = 12017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12017, 'data-value': derived.doubled }, children);
}
export default Component12017;
