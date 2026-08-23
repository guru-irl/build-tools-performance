import React from 'react';
const LABEL_41714 = 'component_41714';
export function Component41714({ value = 41714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41714, 'data-value': derived.doubled }, children);
}
export default Component41714;
