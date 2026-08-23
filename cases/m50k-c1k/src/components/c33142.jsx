import React from 'react';
const LABEL_33142 = 'component_33142';
export function Component33142({ value = 33142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33142, 'data-value': derived.doubled }, children);
}
export default Component33142;
