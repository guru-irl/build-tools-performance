import React from 'react';
const LABEL_41076 = 'component_41076';
export function Component41076({ value = 41076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41076, 'data-value': derived.doubled }, children);
}
export default Component41076;
