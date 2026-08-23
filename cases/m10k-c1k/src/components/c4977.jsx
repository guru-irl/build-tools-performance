import React from 'react';
const LABEL_4977 = 'component_4977';
export function Component4977({ value = 4977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4977, 'data-value': derived.doubled }, children);
}
export default Component4977;
