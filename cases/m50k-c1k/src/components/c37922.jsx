import React from 'react';
const LABEL_37922 = 'component_37922';
export function Component37922({ value = 37922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37922, 'data-value': derived.doubled }, children);
}
export default Component37922;
