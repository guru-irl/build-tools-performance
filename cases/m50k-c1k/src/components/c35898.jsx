import React from 'react';
const LABEL_35898 = 'component_35898';
export function Component35898({ value = 35898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35898, 'data-value': derived.doubled }, children);
}
export default Component35898;
