import React from 'react';
const LABEL_30365 = 'component_30365';
export function Component30365({ value = 30365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30365, 'data-value': derived.doubled }, children);
}
export default Component30365;
