import React from 'react';
const LABEL_7477 = 'component_7477';
export function Component7477({ value = 7477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7477, 'data-value': derived.doubled }, children);
}
export default Component7477;
