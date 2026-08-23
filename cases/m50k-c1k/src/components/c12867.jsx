import React from 'react';
const LABEL_12867 = 'component_12867';
export function Component12867({ value = 12867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12867, 'data-value': derived.doubled }, children);
}
export default Component12867;
