import React from 'react';
const LABEL_39142 = 'component_39142';
export function Component39142({ value = 39142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39142, 'data-value': derived.doubled }, children);
}
export default Component39142;
