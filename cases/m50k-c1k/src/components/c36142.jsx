import React from 'react';
const LABEL_36142 = 'component_36142';
export function Component36142({ value = 36142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36142, 'data-value': derived.doubled }, children);
}
export default Component36142;
