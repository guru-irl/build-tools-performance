import React from 'react';
const LABEL_11165 = 'component_11165';
export function Component11165({ value = 11165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11165, 'data-value': derived.doubled }, children);
}
export default Component11165;
