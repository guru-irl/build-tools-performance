import React from 'react';
const LABEL_31769 = 'component_31769';
export function Component31769({ value = 31769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31769, 'data-value': derived.doubled }, children);
}
export default Component31769;
