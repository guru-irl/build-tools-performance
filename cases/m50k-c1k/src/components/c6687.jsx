import React from 'react';
const LABEL_6687 = 'component_6687';
export function Component6687({ value = 6687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6687, 'data-value': derived.doubled }, children);
}
export default Component6687;
