import React from 'react';
const LABEL_19930 = 'component_19930';
export function Component19930({ value = 19930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19930, 'data-value': derived.doubled }, children);
}
export default Component19930;
