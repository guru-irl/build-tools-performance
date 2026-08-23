import React from 'react';
const LABEL_35016 = 'component_35016';
export function Component35016({ value = 35016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35016, 'data-value': derived.doubled }, children);
}
export default Component35016;
