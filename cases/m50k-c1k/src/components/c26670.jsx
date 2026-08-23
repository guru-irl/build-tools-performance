import React from 'react';
const LABEL_26670 = 'component_26670';
export function Component26670({ value = 26670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26670, 'data-value': derived.doubled }, children);
}
export default Component26670;
