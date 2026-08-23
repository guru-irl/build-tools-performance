import React from 'react';
const LABEL_45954 = 'component_45954';
export function Component45954({ value = 45954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45954, 'data-value': derived.doubled }, children);
}
export default Component45954;
