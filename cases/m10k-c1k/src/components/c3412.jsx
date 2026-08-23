import React from 'react';
const LABEL_3412 = 'component_3412';
export function Component3412({ value = 3412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3412, 'data-value': derived.doubled }, children);
}
export default Component3412;
