import React from 'react';
const LABEL_24925 = 'component_24925';
export function Component24925({ value = 24925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24925, 'data-value': derived.doubled }, children);
}
export default Component24925;
