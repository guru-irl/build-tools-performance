import React from 'react';
const LABEL_8142 = 'component_8142';
export function Component8142({ value = 8142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8142, 'data-value': derived.doubled }, children);
}
export default Component8142;
