import React from 'react';
const LABEL_6615 = 'component_6615';
export function Component6615({ value = 6615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6615, 'data-value': derived.doubled }, children);
}
export default Component6615;
