import React from 'react';
const LABEL_40486 = 'component_40486';
export function Component40486({ value = 40486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40486, 'data-value': derived.doubled }, children);
}
export default Component40486;
