import React from 'react';
const LABEL_40234 = 'component_40234';
export function Component40234({ value = 40234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40234, 'data-value': derived.doubled }, children);
}
export default Component40234;
