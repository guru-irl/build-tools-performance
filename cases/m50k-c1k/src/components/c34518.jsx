import React from 'react';
const LABEL_34518 = 'component_34518';
export function Component34518({ value = 34518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34518, 'data-value': derived.doubled }, children);
}
export default Component34518;
