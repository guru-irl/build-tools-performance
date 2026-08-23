import React from 'react';
const LABEL_40130 = 'component_40130';
export function Component40130({ value = 40130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40130, 'data-value': derived.doubled }, children);
}
export default Component40130;
