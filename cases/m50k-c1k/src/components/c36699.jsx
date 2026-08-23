import React from 'react';
const LABEL_36699 = 'component_36699';
export function Component36699({ value = 36699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36699, 'data-value': derived.doubled }, children);
}
export default Component36699;
