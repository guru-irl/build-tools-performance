import React from 'react';
const LABEL_44518 = 'component_44518';
export function Component44518({ value = 44518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44518, 'data-value': derived.doubled }, children);
}
export default Component44518;
