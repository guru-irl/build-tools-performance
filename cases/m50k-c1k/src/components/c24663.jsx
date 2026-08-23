import React from 'react';
const LABEL_24663 = 'component_24663';
export function Component24663({ value = 24663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24663, 'data-value': derived.doubled }, children);
}
export default Component24663;
