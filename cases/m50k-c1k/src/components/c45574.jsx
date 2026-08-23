import React from 'react';
const LABEL_45574 = 'component_45574';
export function Component45574({ value = 45574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45574, 'data-value': derived.doubled }, children);
}
export default Component45574;
