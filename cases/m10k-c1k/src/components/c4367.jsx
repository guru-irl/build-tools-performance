import React from 'react';
const LABEL_4367 = 'component_4367';
export function Component4367({ value = 4367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4367, 'data-value': derived.doubled }, children);
}
export default Component4367;
