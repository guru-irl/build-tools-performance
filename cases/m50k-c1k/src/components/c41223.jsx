import React from 'react';
const LABEL_41223 = 'component_41223';
export function Component41223({ value = 41223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41223, 'data-value': derived.doubled }, children);
}
export default Component41223;
