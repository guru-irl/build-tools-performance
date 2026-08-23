import React from 'react';
const LABEL_30023 = 'component_30023';
export function Component30023({ value = 30023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30023, 'data-value': derived.doubled }, children);
}
export default Component30023;
