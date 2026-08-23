import React from 'react';
const LABEL_41554 = 'component_41554';
export function Component41554({ value = 41554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41554, 'data-value': derived.doubled }, children);
}
export default Component41554;
