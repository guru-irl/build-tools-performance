import React from 'react';
const LABEL_37340 = 'component_37340';
export function Component37340({ value = 37340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37340, 'data-value': derived.doubled }, children);
}
export default Component37340;
