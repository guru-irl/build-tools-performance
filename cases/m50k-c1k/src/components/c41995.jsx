import React from 'react';
const LABEL_41995 = 'component_41995';
export function Component41995({ value = 41995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41995, 'data-value': derived.doubled }, children);
}
export default Component41995;
