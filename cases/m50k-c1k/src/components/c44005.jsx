import React from 'react';
const LABEL_44005 = 'component_44005';
export function Component44005({ value = 44005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44005, 'data-value': derived.doubled }, children);
}
export default Component44005;
