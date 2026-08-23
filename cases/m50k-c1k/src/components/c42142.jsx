import React from 'react';
const LABEL_42142 = 'component_42142';
export function Component42142({ value = 42142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42142, 'data-value': derived.doubled }, children);
}
export default Component42142;
