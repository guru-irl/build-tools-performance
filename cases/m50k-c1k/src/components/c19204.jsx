import React from 'react';
const LABEL_19204 = 'component_19204';
export function Component19204({ value = 19204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19204, 'data-value': derived.doubled }, children);
}
export default Component19204;
