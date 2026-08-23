import React from 'react';
const LABEL_45486 = 'component_45486';
export function Component45486({ value = 45486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45486, 'data-value': derived.doubled }, children);
}
export default Component45486;
