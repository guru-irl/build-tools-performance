import React from 'react';
const LABEL_37108 = 'component_37108';
export function Component37108({ value = 37108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37108, 'data-value': derived.doubled }, children);
}
export default Component37108;
