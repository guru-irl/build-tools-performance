import React from 'react';
const LABEL_4411 = 'component_4411';
export function Component4411({ value = 4411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4411, 'data-value': derived.doubled }, children);
}
export default Component4411;
