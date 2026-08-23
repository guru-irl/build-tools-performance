import React from 'react';
const LABEL_15450 = 'component_15450';
export function Component15450({ value = 15450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15450, 'data-value': derived.doubled }, children);
}
export default Component15450;
