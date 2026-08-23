import React from 'react';
const LABEL_27142 = 'component_27142';
export function Component27142({ value = 27142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27142, 'data-value': derived.doubled }, children);
}
export default Component27142;
