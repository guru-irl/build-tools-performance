import React from 'react';
const LABEL_35580 = 'component_35580';
export function Component35580({ value = 35580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35580, 'data-value': derived.doubled }, children);
}
export default Component35580;
