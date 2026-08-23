import React from 'react';
const LABEL_12152 = 'component_12152';
export function Component12152({ value = 12152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12152, 'data-value': derived.doubled }, children);
}
export default Component12152;
