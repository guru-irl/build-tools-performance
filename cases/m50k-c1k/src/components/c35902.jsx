import React from 'react';
const LABEL_35902 = 'component_35902';
export function Component35902({ value = 35902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35902, 'data-value': derived.doubled }, children);
}
export default Component35902;
