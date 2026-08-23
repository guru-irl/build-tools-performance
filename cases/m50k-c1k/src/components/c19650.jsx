import React from 'react';
const LABEL_19650 = 'component_19650';
export function Component19650({ value = 19650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19650, 'data-value': derived.doubled }, children);
}
export default Component19650;
