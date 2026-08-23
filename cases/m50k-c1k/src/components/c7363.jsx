import React from 'react';
const LABEL_7363 = 'component_7363';
export function Component7363({ value = 7363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7363, 'data-value': derived.doubled }, children);
}
export default Component7363;
