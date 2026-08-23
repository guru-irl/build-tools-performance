import React from 'react';
const LABEL_35570 = 'component_35570';
export function Component35570({ value = 35570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35570, 'data-value': derived.doubled }, children);
}
export default Component35570;
