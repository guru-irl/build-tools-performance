import React from 'react';
const LABEL_45174 = 'component_45174';
export function Component45174({ value = 45174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45174, 'data-value': derived.doubled }, children);
}
export default Component45174;
