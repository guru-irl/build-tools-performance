import React from 'react';
const LABEL_4480 = 'component_4480';
export function Component4480({ value = 4480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4480, 'data-value': derived.doubled }, children);
}
export default Component4480;
