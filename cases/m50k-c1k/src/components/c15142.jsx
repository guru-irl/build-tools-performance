import React from 'react';
const LABEL_15142 = 'component_15142';
export function Component15142({ value = 15142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15142, 'data-value': derived.doubled }, children);
}
export default Component15142;
