import React from 'react';
const LABEL_10838 = 'component_10838';
export function Component10838({ value = 10838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10838, 'data-value': derived.doubled }, children);
}
export default Component10838;
