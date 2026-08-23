import React from 'react';
const LABEL_15888 = 'component_15888';
export function Component15888({ value = 15888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15888, 'data-value': derived.doubled }, children);
}
export default Component15888;
