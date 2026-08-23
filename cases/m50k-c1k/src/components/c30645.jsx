import React from 'react';
const LABEL_30645 = 'component_30645';
export function Component30645({ value = 30645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30645, 'data-value': derived.doubled }, children);
}
export default Component30645;
