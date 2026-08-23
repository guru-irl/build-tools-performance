import React from 'react';
const LABEL_6518 = 'component_6518';
export function Component6518({ value = 6518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6518, 'data-value': derived.doubled }, children);
}
export default Component6518;
