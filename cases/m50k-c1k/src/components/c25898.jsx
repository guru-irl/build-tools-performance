import React from 'react';
const LABEL_25898 = 'component_25898';
export function Component25898({ value = 25898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25898, 'data-value': derived.doubled }, children);
}
export default Component25898;
