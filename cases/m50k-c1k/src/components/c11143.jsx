import React from 'react';
const LABEL_11143 = 'component_11143';
export function Component11143({ value = 11143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11143, 'data-value': derived.doubled }, children);
}
export default Component11143;
