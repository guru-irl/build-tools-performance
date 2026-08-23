import React from 'react';
const LABEL_14740 = 'component_14740';
export function Component14740({ value = 14740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14740, 'data-value': derived.doubled }, children);
}
export default Component14740;
