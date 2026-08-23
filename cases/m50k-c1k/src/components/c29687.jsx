import React from 'react';
const LABEL_29687 = 'component_29687';
export function Component29687({ value = 29687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29687, 'data-value': derived.doubled }, children);
}
export default Component29687;
