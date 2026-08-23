import React from 'react';
const LABEL_29179 = 'component_29179';
export function Component29179({ value = 29179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29179, 'data-value': derived.doubled }, children);
}
export default Component29179;
