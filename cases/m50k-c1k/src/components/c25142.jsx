import React from 'react';
const LABEL_25142 = 'component_25142';
export function Component25142({ value = 25142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25142, 'data-value': derived.doubled }, children);
}
export default Component25142;
