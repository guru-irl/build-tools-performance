import React from 'react';
const LABEL_11905 = 'component_11905';
export function Component11905({ value = 11905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11905, 'data-value': derived.doubled }, children);
}
export default Component11905;
