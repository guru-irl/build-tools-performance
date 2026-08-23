import React from 'react';
const LABEL_20506 = 'component_20506';
export function Component20506({ value = 20506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20506, 'data-value': derived.doubled }, children);
}
export default Component20506;
