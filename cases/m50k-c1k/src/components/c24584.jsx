import React from 'react';
const LABEL_24584 = 'component_24584';
export function Component24584({ value = 24584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24584, 'data-value': derived.doubled }, children);
}
export default Component24584;
