import React from 'react';
const LABEL_32714 = 'component_32714';
export function Component32714({ value = 32714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32714, 'data-value': derived.doubled }, children);
}
export default Component32714;
