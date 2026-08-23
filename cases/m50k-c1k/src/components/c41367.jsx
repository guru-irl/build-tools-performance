import React from 'react';
const LABEL_41367 = 'component_41367';
export function Component41367({ value = 41367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41367, 'data-value': derived.doubled }, children);
}
export default Component41367;
