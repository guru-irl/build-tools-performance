import React from 'react';
const LABEL_19772 = 'component_19772';
export function Component19772({ value = 19772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19772, 'data-value': derived.doubled }, children);
}
export default Component19772;
