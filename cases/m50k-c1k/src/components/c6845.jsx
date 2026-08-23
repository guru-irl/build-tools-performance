import React from 'react';
const LABEL_6845 = 'component_6845';
export function Component6845({ value = 6845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6845, 'data-value': derived.doubled }, children);
}
export default Component6845;
