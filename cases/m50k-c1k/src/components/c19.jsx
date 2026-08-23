import React from 'react';
const LABEL_19 = 'component_19';
export function Component19({ value = 19, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19, 'data-value': derived.doubled }, children);
}
export default Component19;
