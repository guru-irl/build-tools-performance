import React from 'react';
const LABEL_5909 = 'component_5909';
export function Component5909({ value = 5909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5909, 'data-value': derived.doubled }, children);
}
export default Component5909;
