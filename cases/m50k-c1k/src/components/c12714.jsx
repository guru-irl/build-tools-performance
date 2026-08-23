import React from 'react';
const LABEL_12714 = 'component_12714';
export function Component12714({ value = 12714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12714, 'data-value': derived.doubled }, children);
}
export default Component12714;
