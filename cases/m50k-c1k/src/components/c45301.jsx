import React from 'react';
const LABEL_45301 = 'component_45301';
export function Component45301({ value = 45301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45301, 'data-value': derived.doubled }, children);
}
export default Component45301;
