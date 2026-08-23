import React from 'react';
const LABEL_20642 = 'component_20642';
export function Component20642({ value = 20642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20642, 'data-value': derived.doubled }, children);
}
export default Component20642;
