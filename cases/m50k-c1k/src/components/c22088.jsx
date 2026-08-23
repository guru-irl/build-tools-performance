import React from 'react';
const LABEL_22088 = 'component_22088';
export function Component22088({ value = 22088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22088, 'data-value': derived.doubled }, children);
}
export default Component22088;
