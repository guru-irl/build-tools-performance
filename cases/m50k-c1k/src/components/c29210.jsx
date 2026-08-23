import React from 'react';
const LABEL_29210 = 'component_29210';
export function Component29210({ value = 29210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29210, 'data-value': derived.doubled }, children);
}
export default Component29210;
