import React from 'react';
const LABEL_45461 = 'component_45461';
export function Component45461({ value = 45461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45461, 'data-value': derived.doubled }, children);
}
export default Component45461;
