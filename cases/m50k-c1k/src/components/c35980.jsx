import React from 'react';
const LABEL_35980 = 'component_35980';
export function Component35980({ value = 35980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35980, 'data-value': derived.doubled }, children);
}
export default Component35980;
