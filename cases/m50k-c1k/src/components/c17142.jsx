import React from 'react';
const LABEL_17142 = 'component_17142';
export function Component17142({ value = 17142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17142, 'data-value': derived.doubled }, children);
}
export default Component17142;
