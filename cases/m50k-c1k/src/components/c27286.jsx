import React from 'react';
const LABEL_27286 = 'component_27286';
export function Component27286({ value = 27286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27286, 'data-value': derived.doubled }, children);
}
export default Component27286;
