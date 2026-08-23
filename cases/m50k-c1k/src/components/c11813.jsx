import React from 'react';
const LABEL_11813 = 'component_11813';
export function Component11813({ value = 11813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11813, 'data-value': derived.doubled }, children);
}
export default Component11813;
