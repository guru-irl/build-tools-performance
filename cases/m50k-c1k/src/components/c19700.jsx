import React from 'react';
const LABEL_19700 = 'component_19700';
export function Component19700({ value = 19700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19700, 'data-value': derived.doubled }, children);
}
export default Component19700;
