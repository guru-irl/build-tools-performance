import React from 'react';
const LABEL_30033 = 'component_30033';
export function Component30033({ value = 30033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30033, 'data-value': derived.doubled }, children);
}
export default Component30033;
