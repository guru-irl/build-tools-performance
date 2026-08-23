import React from 'react';
const LABEL_40795 = 'component_40795';
export function Component40795({ value = 40795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40795, 'data-value': derived.doubled }, children);
}
export default Component40795;
