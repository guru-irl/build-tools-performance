import React from 'react';
const LABEL_7412 = 'component_7412';
export function Component7412({ value = 7412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7412, 'data-value': derived.doubled }, children);
}
export default Component7412;
