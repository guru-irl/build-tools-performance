import React from 'react';
const LABEL_21687 = 'component_21687';
export function Component21687({ value = 21687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21687, 'data-value': derived.doubled }, children);
}
export default Component21687;
