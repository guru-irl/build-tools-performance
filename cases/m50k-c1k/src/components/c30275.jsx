import React from 'react';
const LABEL_30275 = 'component_30275';
export function Component30275({ value = 30275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30275, 'data-value': derived.doubled }, children);
}
export default Component30275;
