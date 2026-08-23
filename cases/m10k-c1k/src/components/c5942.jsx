import React from 'react';
const LABEL_5942 = 'component_5942';
export function Component5942({ value = 5942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5942, 'data-value': derived.doubled }, children);
}
export default Component5942;
