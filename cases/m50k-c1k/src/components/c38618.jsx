import React from 'react';
const LABEL_38618 = 'component_38618';
export function Component38618({ value = 38618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38618, 'data-value': derived.doubled }, children);
}
export default Component38618;
