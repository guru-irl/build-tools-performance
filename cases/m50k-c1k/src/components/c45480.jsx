import React from 'react';
const LABEL_45480 = 'component_45480';
export function Component45480({ value = 45480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45480, 'data-value': derived.doubled }, children);
}
export default Component45480;
