import React from 'react';
const LABEL_10922 = 'component_10922';
export function Component10922({ value = 10922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10922, 'data-value': derived.doubled }, children);
}
export default Component10922;
