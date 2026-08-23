import React from 'react';
const LABEL_19624 = 'component_19624';
export function Component19624({ value = 19624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19624, 'data-value': derived.doubled }, children);
}
export default Component19624;
