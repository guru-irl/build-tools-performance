import React from 'react';
const LABEL_11740 = 'component_11740';
export function Component11740({ value = 11740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11740, 'data-value': derived.doubled }, children);
}
export default Component11740;
