import React from 'react';
const LABEL_31980 = 'component_31980';
export function Component31980({ value = 31980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31980, 'data-value': derived.doubled }, children);
}
export default Component31980;
