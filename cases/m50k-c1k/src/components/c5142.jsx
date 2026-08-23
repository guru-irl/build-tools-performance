import React from 'react';
const LABEL_5142 = 'component_5142';
export function Component5142({ value = 5142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5142, 'data-value': derived.doubled }, children);
}
export default Component5142;
