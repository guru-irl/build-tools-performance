import React from 'react';
const LABEL_30993 = 'component_30993';
export function Component30993({ value = 30993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30993, 'data-value': derived.doubled }, children);
}
export default Component30993;
