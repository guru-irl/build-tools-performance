import React from 'react';
const LABEL_44645 = 'component_44645';
export function Component44645({ value = 44645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44645, 'data-value': derived.doubled }, children);
}
export default Component44645;
