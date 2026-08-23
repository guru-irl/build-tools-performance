import React from 'react';
const LABEL_45126 = 'component_45126';
export function Component45126({ value = 45126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45126, 'data-value': derived.doubled }, children);
}
export default Component45126;
