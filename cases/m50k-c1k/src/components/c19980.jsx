import React from 'react';
const LABEL_19980 = 'component_19980';
export function Component19980({ value = 19980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19980, 'data-value': derived.doubled }, children);
}
export default Component19980;
