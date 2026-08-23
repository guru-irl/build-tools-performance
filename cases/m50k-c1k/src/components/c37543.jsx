import React from 'react';
const LABEL_37543 = 'component_37543';
export function Component37543({ value = 37543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37543, 'data-value': derived.doubled }, children);
}
export default Component37543;
