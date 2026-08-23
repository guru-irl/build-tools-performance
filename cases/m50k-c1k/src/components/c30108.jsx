import React from 'react';
const LABEL_30108 = 'component_30108';
export function Component30108({ value = 30108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30108, 'data-value': derived.doubled }, children);
}
export default Component30108;
