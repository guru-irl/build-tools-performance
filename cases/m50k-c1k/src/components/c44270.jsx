import React from 'react';
const LABEL_44270 = 'component_44270';
export function Component44270({ value = 44270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44270, 'data-value': derived.doubled }, children);
}
export default Component44270;
