import React from 'react';
const LABEL_27186 = 'component_27186';
export function Component27186({ value = 27186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27186, 'data-value': derived.doubled }, children);
}
export default Component27186;
