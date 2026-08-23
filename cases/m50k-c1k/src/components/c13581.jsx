import React from 'react';
const LABEL_13581 = 'component_13581';
export function Component13581({ value = 13581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13581, 'data-value': derived.doubled }, children);
}
export default Component13581;
