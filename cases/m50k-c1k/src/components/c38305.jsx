import React from 'react';
const LABEL_38305 = 'component_38305';
export function Component38305({ value = 38305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38305, 'data-value': derived.doubled }, children);
}
export default Component38305;
