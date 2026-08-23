import React from 'react';
const LABEL_13716 = 'component_13716';
export function Component13716({ value = 13716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13716, 'data-value': derived.doubled }, children);
}
export default Component13716;
