import React from 'react';
const LABEL_46716 = 'component_46716';
export function Component46716({ value = 46716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46716, 'data-value': derived.doubled }, children);
}
export default Component46716;
