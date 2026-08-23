import React from 'react';
const LABEL_13142 = 'component_13142';
export function Component13142({ value = 13142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13142, 'data-value': derived.doubled }, children);
}
export default Component13142;
