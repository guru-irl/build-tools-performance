import React from 'react';
const LABEL_20412 = 'component_20412';
export function Component20412({ value = 20412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20412, 'data-value': derived.doubled }, children);
}
export default Component20412;
