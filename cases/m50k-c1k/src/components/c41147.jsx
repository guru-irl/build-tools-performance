import React from 'react';
const LABEL_41147 = 'component_41147';
export function Component41147({ value = 41147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41147, 'data-value': derived.doubled }, children);
}
export default Component41147;
