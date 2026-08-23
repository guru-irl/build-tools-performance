import React from 'react';
const LABEL_40556 = 'component_40556';
export function Component40556({ value = 40556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40556, 'data-value': derived.doubled }, children);
}
export default Component40556;
