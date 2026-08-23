import React from 'react';
const LABEL_45581 = 'component_45581';
export function Component45581({ value = 45581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45581, 'data-value': derived.doubled }, children);
}
export default Component45581;
