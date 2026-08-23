import React from 'react';
const LABEL_19984 = 'component_19984';
export function Component19984({ value = 19984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19984, 'data-value': derived.doubled }, children);
}
export default Component19984;
