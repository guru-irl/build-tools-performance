import React from 'react';
const LABEL_13872 = 'component_13872';
export function Component13872({ value = 13872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13872, 'data-value': derived.doubled }, children);
}
export default Component13872;
