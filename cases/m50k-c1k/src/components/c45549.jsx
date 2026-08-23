import React from 'react';
const LABEL_45549 = 'component_45549';
export function Component45549({ value = 45549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45549, 'data-value': derived.doubled }, children);
}
export default Component45549;
