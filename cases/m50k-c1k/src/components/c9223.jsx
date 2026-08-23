import React from 'react';
const LABEL_9223 = 'component_9223';
export function Component9223({ value = 9223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9223, 'data-value': derived.doubled }, children);
}
export default Component9223;
