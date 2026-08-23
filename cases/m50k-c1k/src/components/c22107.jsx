import React from 'react';
const LABEL_22107 = 'component_22107';
export function Component22107({ value = 22107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22107, 'data-value': derived.doubled }, children);
}
export default Component22107;
