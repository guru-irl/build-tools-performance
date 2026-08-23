import React from 'react';
const LABEL_14142 = 'component_14142';
export function Component14142({ value = 14142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14142, 'data-value': derived.doubled }, children);
}
export default Component14142;
