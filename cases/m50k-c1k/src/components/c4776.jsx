import React from 'react';
const LABEL_4776 = 'component_4776';
export function Component4776({ value = 4776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4776, 'data-value': derived.doubled }, children);
}
export default Component4776;
