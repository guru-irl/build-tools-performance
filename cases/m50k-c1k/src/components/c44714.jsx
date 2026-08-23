import React from 'react';
const LABEL_44714 = 'component_44714';
export function Component44714({ value = 44714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44714, 'data-value': derived.doubled }, children);
}
export default Component44714;
