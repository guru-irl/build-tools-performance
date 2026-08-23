import React from 'react';
const LABEL_38023 = 'component_38023';
export function Component38023({ value = 38023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38023, 'data-value': derived.doubled }, children);
}
export default Component38023;
