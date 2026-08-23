import React from 'react';
const LABEL_22587 = 'component_22587';
export function Component22587({ value = 22587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22587, 'data-value': derived.doubled }, children);
}
export default Component22587;
