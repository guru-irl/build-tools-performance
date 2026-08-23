import React from 'react';
const LABEL_45980 = 'component_45980';
export function Component45980({ value = 45980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45980, 'data-value': derived.doubled }, children);
}
export default Component45980;
