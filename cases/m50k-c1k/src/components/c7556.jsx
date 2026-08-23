import React from 'react';
const LABEL_7556 = 'component_7556';
export function Component7556({ value = 7556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7556, 'data-value': derived.doubled }, children);
}
export default Component7556;
