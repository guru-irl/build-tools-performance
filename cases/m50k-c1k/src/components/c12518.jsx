import React from 'react';
const LABEL_12518 = 'component_12518';
export function Component12518({ value = 12518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12518, 'data-value': derived.doubled }, children);
}
export default Component12518;
