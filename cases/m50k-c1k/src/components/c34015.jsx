import React from 'react';
const LABEL_34015 = 'component_34015';
export function Component34015({ value = 34015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34015, 'data-value': derived.doubled }, children);
}
export default Component34015;
