import React from 'react';
const LABEL_5223 = 'component_5223';
export function Component5223({ value = 5223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5223, 'data-value': derived.doubled }, children);
}
export default Component5223;
