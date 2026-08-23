import React from 'react';
const LABEL_11975 = 'component_11975';
export function Component11975({ value = 11975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11975, 'data-value': derived.doubled }, children);
}
export default Component11975;
