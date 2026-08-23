import React from 'react';
const LABEL_41061 = 'component_41061';
export function Component41061({ value = 41061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41061, 'data-value': derived.doubled }, children);
}
export default Component41061;
