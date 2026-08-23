import React from 'react';
const LABEL_6142 = 'component_6142';
export function Component6142({ value = 6142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6142, 'data-value': derived.doubled }, children);
}
export default Component6142;
