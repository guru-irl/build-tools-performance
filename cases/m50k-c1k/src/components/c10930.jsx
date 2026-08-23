import React from 'react';
const LABEL_10930 = 'component_10930';
export function Component10930({ value = 10930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10930, 'data-value': derived.doubled }, children);
}
export default Component10930;
