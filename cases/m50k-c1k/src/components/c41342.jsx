import React from 'react';
const LABEL_41342 = 'component_41342';
export function Component41342({ value = 41342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41342, 'data-value': derived.doubled }, children);
}
export default Component41342;
