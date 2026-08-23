import React from 'react';
const LABEL_46305 = 'component_46305';
export function Component46305({ value = 46305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46305, 'data-value': derived.doubled }, children);
}
export default Component46305;
