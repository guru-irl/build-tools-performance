import React from 'react';
const LABEL_13898 = 'component_13898';
export function Component13898({ value = 13898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13898, 'data-value': derived.doubled }, children);
}
export default Component13898;
