import React from 'react';
const LABEL_46411 = 'component_46411';
export function Component46411({ value = 46411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46411, 'data-value': derived.doubled }, children);
}
export default Component46411;
