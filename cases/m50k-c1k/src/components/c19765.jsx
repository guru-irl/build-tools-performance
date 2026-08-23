import React from 'react';
const LABEL_19765 = 'component_19765';
export function Component19765({ value = 19765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19765, 'data-value': derived.doubled }, children);
}
export default Component19765;
