import React from 'react';
const LABEL_4877 = 'component_4877';
export function Component4877({ value = 4877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4877, 'data-value': derived.doubled }, children);
}
export default Component4877;
