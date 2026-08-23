import React from 'react';
const LABEL_24364 = 'component_24364';
export function Component24364({ value = 24364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24364, 'data-value': derived.doubled }, children);
}
export default Component24364;
