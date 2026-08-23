import React from 'react';
const LABEL_45765 = 'component_45765';
export function Component45765({ value = 45765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45765, 'data-value': derived.doubled }, children);
}
export default Component45765;
