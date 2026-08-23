import React from 'react';
const LABEL_45122 = 'component_45122';
export function Component45122({ value = 45122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45122, 'data-value': derived.doubled }, children);
}
export default Component45122;
