import React from 'react';
const LABEL_13088 = 'component_13088';
export function Component13088({ value = 13088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13088, 'data-value': derived.doubled }, children);
}
export default Component13088;
