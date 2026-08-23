import React from 'react';
const LABEL_33687 = 'component_33687';
export function Component33687({ value = 33687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33687, 'data-value': derived.doubled }, children);
}
export default Component33687;
