import React from 'react';
const LABEL_28618 = 'component_28618';
export function Component28618({ value = 28618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28618, 'data-value': derived.doubled }, children);
}
export default Component28618;
