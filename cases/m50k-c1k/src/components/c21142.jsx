import React from 'react';
const LABEL_21142 = 'component_21142';
export function Component21142({ value = 21142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21142, 'data-value': derived.doubled }, children);
}
export default Component21142;
