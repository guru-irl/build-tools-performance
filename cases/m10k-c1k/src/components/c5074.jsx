import React from 'react';
const LABEL_5074 = 'component_5074';
export function Component5074({ value = 5074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5074, 'data-value': derived.doubled }, children);
}
export default Component5074;
