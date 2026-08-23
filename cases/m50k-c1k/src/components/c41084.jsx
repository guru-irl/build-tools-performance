import React from 'react';
const LABEL_41084 = 'component_41084';
export function Component41084({ value = 41084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41084, 'data-value': derived.doubled }, children);
}
export default Component41084;
