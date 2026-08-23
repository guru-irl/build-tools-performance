import React from 'react';
const LABEL_9142 = 'component_9142';
export function Component9142({ value = 9142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9142, 'data-value': derived.doubled }, children);
}
export default Component9142;
