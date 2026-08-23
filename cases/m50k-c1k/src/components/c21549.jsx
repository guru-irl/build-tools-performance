import React from 'react';
const LABEL_21549 = 'component_21549';
export function Component21549({ value = 21549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21549, 'data-value': derived.doubled }, children);
}
export default Component21549;
