import React from 'react';
const LABEL_1584 = 'component_1584';
export function Component1584({ value = 1584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1584, 'data-value': derived.doubled }, children);
}
export default Component1584;
