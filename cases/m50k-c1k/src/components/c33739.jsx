import React from 'react';
const LABEL_33739 = 'component_33739';
export function Component33739({ value = 33739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33739, 'data-value': derived.doubled }, children);
}
export default Component33739;
