import React from 'react';
const LABEL_41862 = 'component_41862';
export function Component41862({ value = 41862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41862, 'data-value': derived.doubled }, children);
}
export default Component41862;
