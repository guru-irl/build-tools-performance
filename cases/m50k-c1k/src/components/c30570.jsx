import React from 'react';
const LABEL_30570 = 'component_30570';
export function Component30570({ value = 30570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30570, 'data-value': derived.doubled }, children);
}
export default Component30570;
