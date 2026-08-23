import React from 'react';
const LABEL_37036 = 'component_37036';
export function Component37036({ value = 37036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37036, 'data-value': derived.doubled }, children);
}
export default Component37036;
