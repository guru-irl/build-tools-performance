import React from 'react';
const LABEL_45411 = 'component_45411';
export function Component45411({ value = 45411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45411, 'data-value': derived.doubled }, children);
}
export default Component45411;
