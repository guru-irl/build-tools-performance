import React from 'react';
const LABEL_12806 = 'component_12806';
export function Component12806({ value = 12806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12806, 'data-value': derived.doubled }, children);
}
export default Component12806;
