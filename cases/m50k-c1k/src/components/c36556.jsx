import React from 'react';
const LABEL_36556 = 'component_36556';
export function Component36556({ value = 36556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36556, 'data-value': derived.doubled }, children);
}
export default Component36556;
