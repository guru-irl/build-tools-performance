import React from 'react';
const LABEL_37824 = 'component_37824';
export function Component37824({ value = 37824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37824, 'data-value': derived.doubled }, children);
}
export default Component37824;
