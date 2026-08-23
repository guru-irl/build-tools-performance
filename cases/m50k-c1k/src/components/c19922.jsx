import React from 'react';
const LABEL_19922 = 'component_19922';
export function Component19922({ value = 19922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19922, 'data-value': derived.doubled }, children);
}
export default Component19922;
