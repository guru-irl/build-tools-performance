import React from 'react';
const LABEL_37636 = 'component_37636';
export function Component37636({ value = 37636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37636, 'data-value': derived.doubled }, children);
}
export default Component37636;
