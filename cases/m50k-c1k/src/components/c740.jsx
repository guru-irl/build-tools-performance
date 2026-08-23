import React from 'react';
const LABEL_740 = 'component_740';
export function Component740({ value = 740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_740, 'data-value': derived.doubled }, children);
}
export default Component740;
