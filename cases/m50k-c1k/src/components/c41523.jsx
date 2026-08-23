import React from 'react';
const LABEL_41523 = 'component_41523';
export function Component41523({ value = 41523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41523, 'data-value': derived.doubled }, children);
}
export default Component41523;
