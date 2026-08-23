import React from 'react';
const LABEL_29412 = 'component_29412';
export function Component29412({ value = 29412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29412, 'data-value': derived.doubled }, children);
}
export default Component29412;
