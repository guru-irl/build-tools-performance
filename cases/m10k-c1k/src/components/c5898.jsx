import React from 'react';
const LABEL_5898 = 'component_5898';
export function Component5898({ value = 5898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5898, 'data-value': derived.doubled }, children);
}
export default Component5898;
