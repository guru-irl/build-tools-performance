import React from 'react';
const LABEL_25740 = 'component_25740';
export function Component25740({ value = 25740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25740, 'data-value': derived.doubled }, children);
}
export default Component25740;
