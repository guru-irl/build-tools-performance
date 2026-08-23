import React from 'react';
const LABEL_44941 = 'component_44941';
export function Component44941({ value = 44941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44941, 'data-value': derived.doubled }, children);
}
export default Component44941;
