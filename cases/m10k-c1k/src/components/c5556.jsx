import React from 'react';
const LABEL_5556 = 'component_5556';
export function Component5556({ value = 5556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5556, 'data-value': derived.doubled }, children);
}
export default Component5556;
