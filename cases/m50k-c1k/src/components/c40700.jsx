import React from 'react';
const LABEL_40700 = 'component_40700';
export function Component40700({ value = 40700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40700, 'data-value': derived.doubled }, children);
}
export default Component40700;
