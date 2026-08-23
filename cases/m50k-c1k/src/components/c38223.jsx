import React from 'react';
const LABEL_38223 = 'component_38223';
export function Component38223({ value = 38223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38223, 'data-value': derived.doubled }, children);
}
export default Component38223;
