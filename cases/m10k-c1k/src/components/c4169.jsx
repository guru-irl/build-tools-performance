import React from 'react';
const LABEL_4169 = 'component_4169';
export function Component4169({ value = 4169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4169, 'data-value': derived.doubled }, children);
}
export default Component4169;
