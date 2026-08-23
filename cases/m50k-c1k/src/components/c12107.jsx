import React from 'react';
const LABEL_12107 = 'component_12107';
export function Component12107({ value = 12107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12107, 'data-value': derived.doubled }, children);
}
export default Component12107;
