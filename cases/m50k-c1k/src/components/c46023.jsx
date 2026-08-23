import React from 'react';
const LABEL_46023 = 'component_46023';
export function Component46023({ value = 46023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46023, 'data-value': derived.doubled }, children);
}
export default Component46023;
