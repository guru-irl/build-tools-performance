import React from 'react';
const LABEL_30797 = 'component_30797';
export function Component30797({ value = 30797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30797, 'data-value': derived.doubled }, children);
}
export default Component30797;
