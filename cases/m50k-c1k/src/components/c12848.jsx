import React from 'react';
const LABEL_12848 = 'component_12848';
export function Component12848({ value = 12848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12848, 'data-value': derived.doubled }, children);
}
export default Component12848;
