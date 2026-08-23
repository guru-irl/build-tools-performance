import React from 'react';
const LABEL_34020 = 'component_34020';
export function Component34020({ value = 34020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34020, 'data-value': derived.doubled }, children);
}
export default Component34020;
