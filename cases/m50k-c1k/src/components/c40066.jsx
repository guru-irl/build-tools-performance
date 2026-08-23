import React from 'react';
const LABEL_40066 = 'component_40066';
export function Component40066({ value = 40066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40066, 'data-value': derived.doubled }, children);
}
export default Component40066;
