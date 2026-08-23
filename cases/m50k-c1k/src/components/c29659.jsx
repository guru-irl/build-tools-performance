import React from 'react';
const LABEL_29659 = 'component_29659';
export function Component29659({ value = 29659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29659, 'data-value': derived.doubled }, children);
}
export default Component29659;
