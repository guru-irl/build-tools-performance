import React from 'react';
const LABEL_31225 = 'component_31225';
export function Component31225({ value = 31225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31225, 'data-value': derived.doubled }, children);
}
export default Component31225;
