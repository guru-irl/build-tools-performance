import React from 'react';
const LABEL_37748 = 'component_37748';
export function Component37748({ value = 37748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37748, 'data-value': derived.doubled }, children);
}
export default Component37748;
