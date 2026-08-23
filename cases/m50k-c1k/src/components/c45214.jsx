import React from 'react';
const LABEL_45214 = 'component_45214';
export function Component45214({ value = 45214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45214, 'data-value': derived.doubled }, children);
}
export default Component45214;
