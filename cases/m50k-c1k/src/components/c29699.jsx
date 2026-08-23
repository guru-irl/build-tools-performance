import React from 'react';
const LABEL_29699 = 'component_29699';
export function Component29699({ value = 29699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29699, 'data-value': derived.doubled }, children);
}
export default Component29699;
