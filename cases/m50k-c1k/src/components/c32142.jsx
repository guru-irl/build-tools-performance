import React from 'react';
const LABEL_32142 = 'component_32142';
export function Component32142({ value = 32142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32142, 'data-value': derived.doubled }, children);
}
export default Component32142;
