import React from 'react';
const LABEL_24313 = 'component_24313';
export function Component24313({ value = 24313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24313, 'data-value': derived.doubled }, children);
}
export default Component24313;
