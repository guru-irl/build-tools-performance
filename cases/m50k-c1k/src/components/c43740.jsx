import React from 'react';
const LABEL_43740 = 'component_43740';
export function Component43740({ value = 43740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43740, 'data-value': derived.doubled }, children);
}
export default Component43740;
