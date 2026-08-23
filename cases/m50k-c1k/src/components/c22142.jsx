import React from 'react';
const LABEL_22142 = 'component_22142';
export function Component22142({ value = 22142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22142, 'data-value': derived.doubled }, children);
}
export default Component22142;
