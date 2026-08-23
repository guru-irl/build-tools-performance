import React from 'react';
const LABEL_37072 = 'component_37072';
export function Component37072({ value = 37072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37072, 'data-value': derived.doubled }, children);
}
export default Component37072;
