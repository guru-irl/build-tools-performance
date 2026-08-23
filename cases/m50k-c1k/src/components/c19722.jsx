import React from 'react';
const LABEL_19722 = 'component_19722';
export function Component19722({ value = 19722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19722, 'data-value': derived.doubled }, children);
}
export default Component19722;
