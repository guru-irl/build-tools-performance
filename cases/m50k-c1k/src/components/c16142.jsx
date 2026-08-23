import React from 'react';
const LABEL_16142 = 'component_16142';
export function Component16142({ value = 16142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16142, 'data-value': derived.doubled }, children);
}
export default Component16142;
