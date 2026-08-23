import React from 'react';
const LABEL_10746 = 'component_10746';
export function Component10746({ value = 10746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10746, 'data-value': derived.doubled }, children);
}
export default Component10746;
