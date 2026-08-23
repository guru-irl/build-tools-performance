import React from 'react';
const LABEL_4494 = 'component_4494';
export function Component4494({ value = 4494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4494, 'data-value': derived.doubled }, children);
}
export default Component4494;
