import React from 'react';
const LABEL_20419 = 'component_20419';
export function Component20419({ value = 20419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20419, 'data-value': derived.doubled }, children);
}
export default Component20419;
