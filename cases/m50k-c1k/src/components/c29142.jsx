import React from 'react';
const LABEL_29142 = 'component_29142';
export function Component29142({ value = 29142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29142, 'data-value': derived.doubled }, children);
}
export default Component29142;
