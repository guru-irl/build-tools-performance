import React from 'react';
const LABEL_26740 = 'component_26740';
export function Component26740({ value = 26740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26740, 'data-value': derived.doubled }, children);
}
export default Component26740;
