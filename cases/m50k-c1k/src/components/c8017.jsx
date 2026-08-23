import React from 'react';
const LABEL_8017 = 'component_8017';
export function Component8017({ value = 8017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8017, 'data-value': derived.doubled }, children);
}
export default Component8017;
