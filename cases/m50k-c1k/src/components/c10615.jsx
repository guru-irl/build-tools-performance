import React from 'react';
const LABEL_10615 = 'component_10615';
export function Component10615({ value = 10615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10615, 'data-value': derived.doubled }, children);
}
export default Component10615;
