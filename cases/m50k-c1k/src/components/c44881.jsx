import React from 'react';
const LABEL_44881 = 'component_44881';
export function Component44881({ value = 44881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44881, 'data-value': derived.doubled }, children);
}
export default Component44881;
