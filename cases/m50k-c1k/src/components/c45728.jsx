import React from 'react';
const LABEL_45728 = 'component_45728';
export function Component45728({ value = 45728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45728, 'data-value': derived.doubled }, children);
}
export default Component45728;
