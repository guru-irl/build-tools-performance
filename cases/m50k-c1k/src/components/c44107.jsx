import React from 'react';
const LABEL_44107 = 'component_44107';
export function Component44107({ value = 44107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44107, 'data-value': derived.doubled }, children);
}
export default Component44107;
