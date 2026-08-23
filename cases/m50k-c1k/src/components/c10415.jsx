import React from 'react';
const LABEL_10415 = 'component_10415';
export function Component10415({ value = 10415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10415, 'data-value': derived.doubled }, children);
}
export default Component10415;
