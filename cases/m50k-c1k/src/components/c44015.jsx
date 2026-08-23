import React from 'react';
const LABEL_44015 = 'component_44015';
export function Component44015({ value = 44015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44015, 'data-value': derived.doubled }, children);
}
export default Component44015;
