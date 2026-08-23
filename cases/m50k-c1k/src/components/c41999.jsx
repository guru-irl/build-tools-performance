import React from 'react';
const LABEL_41999 = 'component_41999';
export function Component41999({ value = 41999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41999, 'data-value': derived.doubled }, children);
}
export default Component41999;
