import React from 'react';
const LABEL_44023 = 'component_44023';
export function Component44023({ value = 44023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44023, 'data-value': derived.doubled }, children);
}
export default Component44023;
