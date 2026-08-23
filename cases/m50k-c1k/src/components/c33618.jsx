import React from 'react';
const LABEL_33618 = 'component_33618';
export function Component33618({ value = 33618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33618, 'data-value': derived.doubled }, children);
}
export default Component33618;
