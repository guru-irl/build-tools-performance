import React from 'react';
const LABEL_44393 = 'component_44393';
export function Component44393({ value = 44393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44393, 'data-value': derived.doubled }, children);
}
export default Component44393;
