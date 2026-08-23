import React from 'react';
const LABEL_8862 = 'component_8862';
export function Component8862({ value = 8862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8862, 'data-value': derived.doubled }, children);
}
export default Component8862;
