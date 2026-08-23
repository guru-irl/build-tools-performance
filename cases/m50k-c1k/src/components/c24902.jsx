import React from 'react';
const LABEL_24902 = 'component_24902';
export function Component24902({ value = 24902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24902, 'data-value': derived.doubled }, children);
}
export default Component24902;
