import React from 'react';
const LABEL_36740 = 'component_36740';
export function Component36740({ value = 36740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36740, 'data-value': derived.doubled }, children);
}
export default Component36740;
