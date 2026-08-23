import React from 'react';
const LABEL_8527 = 'component_8527';
export function Component8527({ value = 8527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8527, 'data-value': derived.doubled }, children);
}
export default Component8527;
