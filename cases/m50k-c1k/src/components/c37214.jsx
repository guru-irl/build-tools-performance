import React from 'react';
const LABEL_37214 = 'component_37214';
export function Component37214({ value = 37214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37214, 'data-value': derived.doubled }, children);
}
export default Component37214;
