import React from 'react';
const LABEL_11699 = 'component_11699';
export function Component11699({ value = 11699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11699, 'data-value': derived.doubled }, children);
}
export default Component11699;
