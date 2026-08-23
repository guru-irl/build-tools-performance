import React from 'react';
const LABEL_11922 = 'component_11922';
export function Component11922({ value = 11922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11922, 'data-value': derived.doubled }, children);
}
export default Component11922;
