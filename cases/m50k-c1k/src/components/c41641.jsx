import React from 'react';
const LABEL_41641 = 'component_41641';
export function Component41641({ value = 41641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41641, 'data-value': derived.doubled }, children);
}
export default Component41641;
