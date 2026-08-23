import React from 'react';
const LABEL_16366 = 'component_16366';
export function Component16366({ value = 16366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16366, 'data-value': derived.doubled }, children);
}
export default Component16366;
