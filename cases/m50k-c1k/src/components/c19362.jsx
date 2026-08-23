import React from 'react';
const LABEL_19362 = 'component_19362';
export function Component19362({ value = 19362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19362, 'data-value': derived.doubled }, children);
}
export default Component19362;
