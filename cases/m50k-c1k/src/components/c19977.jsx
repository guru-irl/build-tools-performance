import React from 'react';
const LABEL_19977 = 'component_19977';
export function Component19977({ value = 19977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19977, 'data-value': derived.doubled }, children);
}
export default Component19977;
