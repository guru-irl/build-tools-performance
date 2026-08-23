import React from 'react';
const LABEL_4559 = 'component_4559';
export function Component4559({ value = 4559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4559, 'data-value': derived.doubled }, children);
}
export default Component4559;
