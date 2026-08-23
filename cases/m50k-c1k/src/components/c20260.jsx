import React from 'react';
const LABEL_20260 = 'component_20260';
export function Component20260({ value = 20260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20260, 'data-value': derived.doubled }, children);
}
export default Component20260;
