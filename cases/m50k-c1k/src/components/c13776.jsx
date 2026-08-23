import React from 'react';
const LABEL_13776 = 'component_13776';
export function Component13776({ value = 13776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13776, 'data-value': derived.doubled }, children);
}
export default Component13776;
