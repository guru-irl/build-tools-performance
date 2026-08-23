import React from 'react';
const LABEL_6686 = 'component_6686';
export function Component6686({ value = 6686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6686, 'data-value': derived.doubled }, children);
}
export default Component6686;
