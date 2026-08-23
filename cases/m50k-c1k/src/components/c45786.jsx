import React from 'react';
const LABEL_45786 = 'component_45786';
export function Component45786({ value = 45786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45786, 'data-value': derived.doubled }, children);
}
export default Component45786;
