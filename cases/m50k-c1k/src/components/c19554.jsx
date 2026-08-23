import React from 'react';
const LABEL_19554 = 'component_19554';
export function Component19554({ value = 19554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19554, 'data-value': derived.doubled }, children);
}
export default Component19554;
