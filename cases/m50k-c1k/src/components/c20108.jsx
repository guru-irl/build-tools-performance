import React from 'react';
const LABEL_20108 = 'component_20108';
export function Component20108({ value = 20108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20108, 'data-value': derived.doubled }, children);
}
export default Component20108;
