import React from 'react';
const LABEL_18740 = 'component_18740';
export function Component18740({ value = 18740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18740, 'data-value': derived.doubled }, children);
}
export default Component18740;
