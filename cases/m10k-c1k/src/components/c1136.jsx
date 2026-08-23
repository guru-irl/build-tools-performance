import React from 'react';
const LABEL_1136 = 'component_1136';
export function Component1136({ value = 1136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1136, 'data-value': derived.doubled }, children);
}
export default Component1136;
