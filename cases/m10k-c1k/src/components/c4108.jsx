import React from 'react';
const LABEL_4108 = 'component_4108';
export function Component4108({ value = 4108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4108, 'data-value': derived.doubled }, children);
}
export default Component4108;
