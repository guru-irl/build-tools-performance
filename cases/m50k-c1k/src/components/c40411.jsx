import React from 'react';
const LABEL_40411 = 'component_40411';
export function Component40411({ value = 40411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40411, 'data-value': derived.doubled }, children);
}
export default Component40411;
