import React from 'react';
const LABEL_83 = 'component_83';
export function Component83({ value = 83, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_83, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_83, 'data-value': derived.doubled }, children);
}
export default Component83;
