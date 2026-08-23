import React from 'react';
const LABEL_14183 = 'component_14183';
export function Component14183({ value = 14183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14183, 'data-value': derived.doubled }, children);
}
export default Component14183;
