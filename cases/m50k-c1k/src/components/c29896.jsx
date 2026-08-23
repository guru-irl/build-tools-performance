import React from 'react';
const LABEL_29896 = 'component_29896';
export function Component29896({ value = 29896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29896, 'data-value': derived.doubled }, children);
}
export default Component29896;
