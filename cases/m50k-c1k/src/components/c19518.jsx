import React from 'react';
const LABEL_19518 = 'component_19518';
export function Component19518({ value = 19518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19518, 'data-value': derived.doubled }, children);
}
export default Component19518;
