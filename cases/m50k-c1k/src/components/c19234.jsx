import React from 'react';
const LABEL_19234 = 'component_19234';
export function Component19234({ value = 19234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19234, 'data-value': derived.doubled }, children);
}
export default Component19234;
