import React from 'react';
const LABEL_38142 = 'component_38142';
export function Component38142({ value = 38142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38142, 'data-value': derived.doubled }, children);
}
export default Component38142;
