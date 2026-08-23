import React from 'react';
const LABEL_19431 = 'component_19431';
export function Component19431({ value = 19431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19431, 'data-value': derived.doubled }, children);
}
export default Component19431;
