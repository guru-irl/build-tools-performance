import React from 'react';
const LABEL_41356 = 'component_41356';
export function Component41356({ value = 41356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41356, 'data-value': derived.doubled }, children);
}
export default Component41356;
