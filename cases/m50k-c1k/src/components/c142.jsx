import React from 'react';
const LABEL_142 = 'component_142';
export function Component142({ value = 142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_142, 'data-value': derived.doubled }, children);
}
export default Component142;
