import React from 'react';
const LABEL_26411 = 'component_26411';
export function Component26411({ value = 26411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26411, 'data-value': derived.doubled }, children);
}
export default Component26411;
