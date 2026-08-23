import React from 'react';
const LABEL_44169 = 'component_44169';
export function Component44169({ value = 44169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44169, 'data-value': derived.doubled }, children);
}
export default Component44169;
