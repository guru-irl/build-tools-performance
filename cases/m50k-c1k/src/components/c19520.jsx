import React from 'react';
const LABEL_19520 = 'component_19520';
export function Component19520({ value = 19520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19520, 'data-value': derived.doubled }, children);
}
export default Component19520;
