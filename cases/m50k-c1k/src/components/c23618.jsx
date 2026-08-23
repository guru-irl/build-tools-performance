import React from 'react';
const LABEL_23618 = 'component_23618';
export function Component23618({ value = 23618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23618, 'data-value': derived.doubled }, children);
}
export default Component23618;
