import React from 'react';
const LABEL_29748 = 'component_29748';
export function Component29748({ value = 29748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29748, 'data-value': derived.doubled }, children);
}
export default Component29748;
