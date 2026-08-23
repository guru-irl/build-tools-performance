import React from 'react';
const LABEL_41184 = 'component_41184';
export function Component41184({ value = 41184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41184, 'data-value': derived.doubled }, children);
}
export default Component41184;
