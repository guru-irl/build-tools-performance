import React from 'react';
const LABEL_3666 = 'component_3666';
export function Component3666({ value = 3666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3666, 'data-value': derived.doubled }, children);
}
export default Component3666;
