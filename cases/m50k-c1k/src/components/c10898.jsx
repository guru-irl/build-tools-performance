import React from 'react';
const LABEL_10898 = 'component_10898';
export function Component10898({ value = 10898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10898, 'data-value': derived.doubled }, children);
}
export default Component10898;
