import React from 'react';
const LABEL_4556 = 'component_4556';
export function Component4556({ value = 4556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4556, 'data-value': derived.doubled }, children);
}
export default Component4556;
