import React from 'react';
const LABEL_33872 = 'component_33872';
export function Component33872({ value = 33872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33872, 'data-value': derived.doubled }, children);
}
export default Component33872;
