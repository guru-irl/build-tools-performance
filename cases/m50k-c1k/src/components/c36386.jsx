import React from 'react';
const LABEL_36386 = 'component_36386';
export function Component36386({ value = 36386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36386, 'data-value': derived.doubled }, children);
}
export default Component36386;
