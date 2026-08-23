import React from 'react';
const LABEL_19423 = 'component_19423';
export function Component19423({ value = 19423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19423, 'data-value': derived.doubled }, children);
}
export default Component19423;
