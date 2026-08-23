import React from 'react';
const LABEL_7740 = 'component_7740';
export function Component7740({ value = 7740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7740, 'data-value': derived.doubled }, children);
}
export default Component7740;
