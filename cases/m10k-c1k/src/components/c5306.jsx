import React from 'react';
const LABEL_5306 = 'component_5306';
export function Component5306({ value = 5306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5306, 'data-value': derived.doubled }, children);
}
export default Component5306;
