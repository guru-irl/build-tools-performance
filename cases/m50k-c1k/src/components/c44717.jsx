import React from 'react';
const LABEL_44717 = 'component_44717';
export function Component44717({ value = 44717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44717, 'data-value': derived.doubled }, children);
}
export default Component44717;
