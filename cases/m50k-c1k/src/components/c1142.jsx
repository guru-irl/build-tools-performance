import React from 'react';
const LABEL_1142 = 'component_1142';
export function Component1142({ value = 1142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1142, 'data-value': derived.doubled }, children);
}
export default Component1142;
