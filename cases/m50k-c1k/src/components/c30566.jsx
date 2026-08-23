import React from 'react';
const LABEL_30566 = 'component_30566';
export function Component30566({ value = 30566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30566, 'data-value': derived.doubled }, children);
}
export default Component30566;
