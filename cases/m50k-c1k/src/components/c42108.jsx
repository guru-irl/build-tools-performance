import React from 'react';
const LABEL_42108 = 'component_42108';
export function Component42108({ value = 42108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42108, 'data-value': derived.doubled }, children);
}
export default Component42108;
