import React from 'react';
const LABEL_19079 = 'component_19079';
export function Component19079({ value = 19079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19079, 'data-value': derived.doubled }, children);
}
export default Component19079;
