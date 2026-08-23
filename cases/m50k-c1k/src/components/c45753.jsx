import React from 'react';
const LABEL_45753 = 'component_45753';
export function Component45753({ value = 45753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45753, 'data-value': derived.doubled }, children);
}
export default Component45753;
