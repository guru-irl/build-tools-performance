import React from 'react';
const LABEL_14556 = 'component_14556';
export function Component14556({ value = 14556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14556, 'data-value': derived.doubled }, children);
}
export default Component14556;
