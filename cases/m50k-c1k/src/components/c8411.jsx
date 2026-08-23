import React from 'react';
const LABEL_8411 = 'component_8411';
export function Component8411({ value = 8411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8411, 'data-value': derived.doubled }, children);
}
export default Component8411;
