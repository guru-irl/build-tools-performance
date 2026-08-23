import React from 'react';
const LABEL_353 = 'component_353';
export function Component353({ value = 353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_353, 'data-value': derived.doubled }, children);
}
export default Component353;
