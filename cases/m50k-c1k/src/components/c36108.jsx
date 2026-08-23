import React from 'react';
const LABEL_36108 = 'component_36108';
export function Component36108({ value = 36108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36108, 'data-value': derived.doubled }, children);
}
export default Component36108;
