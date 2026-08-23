import React from 'react';
const LABEL_4412 = 'component_4412';
export function Component4412({ value = 4412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4412, 'data-value': derived.doubled }, children);
}
export default Component4412;
