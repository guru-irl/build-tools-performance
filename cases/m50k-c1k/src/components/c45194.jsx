import React from 'react';
const LABEL_45194 = 'component_45194';
export function Component45194({ value = 45194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45194, 'data-value': derived.doubled }, children);
}
export default Component45194;
