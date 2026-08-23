import React from 'react';
const LABEL_41007 = 'component_41007';
export function Component41007({ value = 41007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41007, 'data-value': derived.doubled }, children);
}
export default Component41007;
