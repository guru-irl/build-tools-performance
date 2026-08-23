import React from 'react';
const LABEL_29740 = 'component_29740';
export function Component29740({ value = 29740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29740, 'data-value': derived.doubled }, children);
}
export default Component29740;
