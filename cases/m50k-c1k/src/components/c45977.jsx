import React from 'react';
const LABEL_45977 = 'component_45977';
export function Component45977({ value = 45977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45977, 'data-value': derived.doubled }, children);
}
export default Component45977;
