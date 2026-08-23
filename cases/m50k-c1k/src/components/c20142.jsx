import React from 'react';
const LABEL_20142 = 'component_20142';
export function Component20142({ value = 20142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20142, 'data-value': derived.doubled }, children);
}
export default Component20142;
