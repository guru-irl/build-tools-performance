import React from 'react';
const LABEL_34997 = 'component_34997';
export function Component34997({ value = 34997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34997, 'data-value': derived.doubled }, children);
}
export default Component34997;
