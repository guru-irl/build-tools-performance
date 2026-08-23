import React from 'react';
const LABEL_30411 = 'component_30411';
export function Component30411({ value = 30411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30411, 'data-value': derived.doubled }, children);
}
export default Component30411;
