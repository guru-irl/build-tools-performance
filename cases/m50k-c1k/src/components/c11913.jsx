import React from 'react';
const LABEL_11913 = 'component_11913';
export function Component11913({ value = 11913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11913, 'data-value': derived.doubled }, children);
}
export default Component11913;
