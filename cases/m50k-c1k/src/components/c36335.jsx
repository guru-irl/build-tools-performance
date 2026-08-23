import React from 'react';
const LABEL_36335 = 'component_36335';
export function Component36335({ value = 36335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36335, 'data-value': derived.doubled }, children);
}
export default Component36335;
