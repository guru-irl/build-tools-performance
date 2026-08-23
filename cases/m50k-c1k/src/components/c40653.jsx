import React from 'react';
const LABEL_40653 = 'component_40653';
export function Component40653({ value = 40653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40653, 'data-value': derived.doubled }, children);
}
export default Component40653;
