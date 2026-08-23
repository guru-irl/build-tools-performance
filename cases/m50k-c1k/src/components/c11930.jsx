import React from 'react';
const LABEL_11930 = 'component_11930';
export function Component11930({ value = 11930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11930, 'data-value': derived.doubled }, children);
}
export default Component11930;
