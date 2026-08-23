import React from 'react';
const LABEL_10570 = 'component_10570';
export function Component10570({ value = 10570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10570, 'data-value': derived.doubled }, children);
}
export default Component10570;
