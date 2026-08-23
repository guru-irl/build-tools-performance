import React from 'react';
const LABEL_41481 = 'component_41481';
export function Component41481({ value = 41481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41481, 'data-value': derived.doubled }, children);
}
export default Component41481;
