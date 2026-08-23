import React from 'react';
const LABEL_4895 = 'component_4895';
export function Component4895({ value = 4895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4895, 'data-value': derived.doubled }, children);
}
export default Component4895;
