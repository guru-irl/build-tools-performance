import React from 'react';
const LABEL_13838 = 'component_13838';
export function Component13838({ value = 13838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13838, 'data-value': derived.doubled }, children);
}
export default Component13838;
