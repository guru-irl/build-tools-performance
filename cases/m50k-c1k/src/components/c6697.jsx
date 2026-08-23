import React from 'react';
const LABEL_6697 = 'component_6697';
export function Component6697({ value = 6697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6697, 'data-value': derived.doubled }, children);
}
export default Component6697;
