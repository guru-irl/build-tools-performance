import React from 'react';
const LABEL_41521 = 'component_41521';
export function Component41521({ value = 41521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41521, 'data-value': derived.doubled }, children);
}
export default Component41521;
