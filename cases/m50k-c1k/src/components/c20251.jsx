import React from 'react';
const LABEL_20251 = 'component_20251';
export function Component20251({ value = 20251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20251, 'data-value': derived.doubled }, children);
}
export default Component20251;
