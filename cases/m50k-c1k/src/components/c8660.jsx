import React from 'react';
const LABEL_8660 = 'component_8660';
export function Component8660({ value = 8660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8660, 'data-value': derived.doubled }, children);
}
export default Component8660;
