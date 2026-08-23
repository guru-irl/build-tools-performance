import React from 'react';
const LABEL_41539 = 'component_41539';
export function Component41539({ value = 41539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41539, 'data-value': derived.doubled }, children);
}
export default Component41539;
