import React from 'react';
const LABEL_41867 = 'component_41867';
export function Component41867({ value = 41867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41867, 'data-value': derived.doubled }, children);
}
export default Component41867;
