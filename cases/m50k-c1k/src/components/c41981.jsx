import React from 'react';
const LABEL_41981 = 'component_41981';
export function Component41981({ value = 41981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41981, 'data-value': derived.doubled }, children);
}
export default Component41981;
