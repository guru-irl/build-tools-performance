import React from 'react';
const LABEL_24699 = 'component_24699';
export function Component24699({ value = 24699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24699, 'data-value': derived.doubled }, children);
}
export default Component24699;
