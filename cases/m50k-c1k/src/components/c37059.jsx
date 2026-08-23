import React from 'react';
const LABEL_37059 = 'component_37059';
export function Component37059({ value = 37059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37059, 'data-value': derived.doubled }, children);
}
export default Component37059;
