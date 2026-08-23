import React from 'react';
const LABEL_9930 = 'component_9930';
export function Component9930({ value = 9930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9930, 'data-value': derived.doubled }, children);
}
export default Component9930;
