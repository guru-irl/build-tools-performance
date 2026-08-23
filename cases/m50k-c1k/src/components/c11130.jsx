import React from 'react';
const LABEL_11130 = 'component_11130';
export function Component11130({ value = 11130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11130, 'data-value': derived.doubled }, children);
}
export default Component11130;
