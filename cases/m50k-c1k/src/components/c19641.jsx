import React from 'react';
const LABEL_19641 = 'component_19641';
export function Component19641({ value = 19641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19641, 'data-value': derived.doubled }, children);
}
export default Component19641;
