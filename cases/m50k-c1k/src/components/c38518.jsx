import React from 'react';
const LABEL_38518 = 'component_38518';
export function Component38518({ value = 38518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38518, 'data-value': derived.doubled }, children);
}
export default Component38518;
