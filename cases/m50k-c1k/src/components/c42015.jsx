import React from 'react';
const LABEL_42015 = 'component_42015';
export function Component42015({ value = 42015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42015, 'data-value': derived.doubled }, children);
}
export default Component42015;
