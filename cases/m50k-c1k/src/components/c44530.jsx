import React from 'react';
const LABEL_44530 = 'component_44530';
export function Component44530({ value = 44530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44530, 'data-value': derived.doubled }, children);
}
export default Component44530;
